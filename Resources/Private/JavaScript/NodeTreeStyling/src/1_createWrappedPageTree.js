import React, {PureComponent} from 'react';
import makeWrappedChildRenderer from './2_modifyTreeElementRendering';

export default OriginalPageTree => {
    /**
     * OriginalPageTree is of type `connect(NodeTree)`.
     *
     * We need to override the "ChildRenderer" property, which is the Tree Node instance (from neos-ui/Containers/LeftSideBar/NodeTree/Node/index.js).
     *
     * As the ChildRenderer is passed to the nested component using `mapStateToProps` we can override an internal
     * Redux method `addExtraProps` https://github.com/reactjs/react-redux/blob/master/src/components/connectAdvanced.js#L236
     * to modify the ChildRenderer before we pass it on.
     */
    return class PageTree extends OriginalPageTree {
        addExtraProps(props) {
            const modifiedProps = {...props};
            modifiedProps.ChildRenderer = makeWrappedChildRenderer(props.ChildRenderer);
            return super.addExtraProps(modifiedProps);
        }
    }
}
