import {createTamagui} from '@tamagui/core'
import {config} from '@tamagui/config/v3'

export const tamaguiConfig = createTamagui(config)

type Conf = typeof tamaguiConfig
declare module 'tamagui' {
    interface TamaguiCustomConfig extends Conf {
    }
}

export default tamaguiConfig;