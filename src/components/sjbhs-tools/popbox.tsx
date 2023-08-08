/** @jsxImportSource react */


import { component$} from "@builder.io/qwik";

import { qwikify$ } from '@builder.io/qwik-react';
import {color, motion} from 'framer-motion'
import styles from './popbox.module.css';

const MyComponent = () => {

    return(
        <div>
    <h1 className= "text-white">Hello World</h1>
    </div>
    
    
    )
};

export const Popbox = qwikify$(MyComponent)