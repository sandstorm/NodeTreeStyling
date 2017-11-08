import manifest from '@neos-project/neos-ui-extensibility';
import createWrappedPageTree from './1_createWrappedPageTree';

manifest('Sandstorm.NodeTreeStyling', {}, (globalRegistry) => {
    const containerRegistry = globalRegistry.get('containers');
    const PageTree = containerRegistry.get('LeftSideBar/Top/PageTree');

    containerRegistry.set('LeftSideBar/Top/PageTree', createWrappedPageTree(PageTree));
});
