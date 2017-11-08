# Node Tree Styling / Unplanned Extensibility in Neos React UI Example

**Warning: This package shows UNPLANNED EXTENSIBILITY. If possible, use planned extension points to archive your goals!**

## What this package does

- if the user has specified a _hiddenAfterDateTime, a custom icon is shown in the node tree
- if the user has specified a _hiddenAfterDateTime, the node tree item turns red.

## How this is done

This is done with basically no modification to the Neos React UI core code,
only through some monkey-patches:

### 1) retrieve connect()ed props from Page Tree to access ChildRenderer prop 

As the ChildRenderer is passed to the nested component using `mapStateToProps` we can override an internal
Redux method `addExtraProps` https://github.com/reactjs/react-redux/blob/master/src/components/connectAdvanced.js#L236
to modify the ChildRenderer before we pass it on.
     
### 2a) override getIcon() method in NodeTreeNode

This is done by overriding `NodeTreeNode.prototype.getIcon`.

### 2b) override Tree.Node.Header

This is done by post processing the render-method output of
`NodeTreeNode`; finding the correct React Element; and modifying
this one.


## Is this a best-practice way to archive the tasks from above?

We consider the tasks from above to be some real edge cases for
extensibility. That's why I think it is fine to rely on internal
implementation details here; knowing that this might need to be
re-written if bigger implementation parts change.

## Is this working without modifications to the Neos.Neos.Ui Package?

https://github.com/neos/neos-ui/pull/1230 must be merged first,
fixing some general things in the React UI for these modifications
above to work. 
