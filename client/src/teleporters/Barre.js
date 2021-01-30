import React, { Component } from 'react';
import { createTeleporter } from "react-teleporter";

const Barre = createTeleporter();

export function BarreTarget() {
    return (
        <Barre.Target />
    )
}

export function BarreSource({ children }) {
    return (
        <Barre.Source>{ children }</Barre.Source>
    )
}

