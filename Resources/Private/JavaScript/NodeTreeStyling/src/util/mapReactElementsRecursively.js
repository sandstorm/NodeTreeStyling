import {isValidElement, cloneElement, Children} from 'react';

export default function mapReactElementsRecursively(children, cb) {
    return Children.map(children, (child) => {
        if (!isValidElement(child)) { return child; }

        if (child.props.children) {
            child = cloneElement(child, {
                children: mapReactElementsRecursively(child.props.children, cb)
            });
        }

        return cb(child);
    });
}
