import React from 'react';
import { BaseToast } from './BaseToast';
export function SuccessToast(props) {
    return <BaseToast style={{ backgroundColor:'#28a745' }} {...props}/>;
}
