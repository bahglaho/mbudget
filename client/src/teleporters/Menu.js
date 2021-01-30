import React, { Component } from 'react';
import { createTeleporter } from "react-teleporter";

const Menu = createTeleporter();

export function MenuTarget() {
    return (
        <Menu.Target />
    )
}

export function MenuSource({ children }) {
    return (
        <Menu.Source>{ children }</Menu.Source>
    )
}

