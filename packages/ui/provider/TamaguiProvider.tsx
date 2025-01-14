import {TamaguiProvider as TamaguiRootProvider} from '@tamagui/core'
import {ReactNode} from "react";
import {tamaguiConfig} from "@my-app/ui/tamagui.config";


export function TamaguiProvider({children}: { children: ReactNode }) {
    return (
        <TamaguiRootProvider config={tamaguiConfig}>
            {children}
        </TamaguiRootProvider>
    )
}