import React, { useState } from "react";

export function useSwipeAction() {
    function createSwipe() {}
    function updateSwipe() {}
    function deleteSwipe() {}

    return {
        createSwipe,
        updateSwipe,
        deleteSwipe,
    };
}
