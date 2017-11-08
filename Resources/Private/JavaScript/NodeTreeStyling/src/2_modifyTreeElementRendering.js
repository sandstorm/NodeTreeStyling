import React, {isValidElement, cloneElement, createElement, Children, PureComponent} from 'react';
import {$get} from 'plow-js';
import mapReactElementsRecursively from './util/mapReactElementsRecursively';


export default ChildRenderer => {
    ///////////////////////////////////////////////////
    // 1. SETUP
    ///////////////////////////////////////////////////

    // ChildRenderer is a neos(connect(TreeNode))
    // -> so we need to access the wrapped component to retrieve the actual Tree Node; and then we start monkey-patching it.
    // "TreeNode" is the class defined in neos-ui/Containers/LeftSideBar/NodeTree/Node/index.js
    const TreeNode = ChildRenderer.WrappedComponent.WrappedComponent;

    if (TreeNode.prototype._MODIFIED_SandstormNodeTreeStyling) {
        return ChildRenderer;
    }
    TreeNode.prototype._MODIFIED_SandstormNodeTreeStyling = true;

    ///////////////////////////////////////////////////
    // 2. override getIcon functionality in TreeNode
    ///////////////////////////////////////////////////
    const originalGetIcon = TreeNode.prototype.getIcon;
    TreeNode.prototype.getIcon = function() {
        if ($get('properties._hiddenAfterDateTime', this.props.node)) {
            return 'fa-ban';
        }
        return originalGetIcon.apply(this, arguments);
    };


    ///////////////////////////////////////////////////
    // 3. wrap <Tree.Node.Header> (which sadly has the displayName ThemedDragDropContainer) by a custom implementation
    //    with custom styling.
    //
    // As TreeNodeHeader is the used somewhere in the result of Node.render(), we parse the returned React Element tree,
    // copy and modify it if we find the Tree Node Header.
    ///////////////////////////////////////////////////
    const originalRender = TreeNode.prototype.render;
    TreeNode.prototype.render = function() {
        const results = originalRender.apply(this, arguments);

        return mapReactElementsRecursively(results, (child) => {
            if (child.type.displayName === 'ThemedDragDropContainer') {
                return createElement(
                    wrapTreeNodeHeaderComponent(child.type, this.props),
                    child.props
                );
            }

            return child;
        });

    };

    return ChildRenderer;
}

function wrapTreeNodeHeaderComponent(TreeNodeHeader, propsFromTreeNode) {
    return class WrappedTreeNodeHeader extends PureComponent {
        render() {
            const style = {};
            if ($get('properties._hiddenAfterDateTime', propsFromTreeNode.node)) {
                style.background = 'red';
            }
            return <TreeNodeHeader style={style} {...this.props}/>
        }
    }
}

