import type { FC, ReactNode } from 'react';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

import { BounceableView, TouchableOpacity } from '~/components/ui/View';
import { useThemeColor } from '~/hooks/useThemeColor';
import type { StyleProps } from '~/types/style';

export type CardProps = StyleProps & {
  children: ReactNode;
  isBorder?: true;
  activeOpacity?: number;
  onPress?: () => void;
};

export const Card: FC<CardProps> = memo(
  ({
    // 基本的に使用しない
    // custom themeで色を指定する
    lightBg,
    darkBg,
    // custom theme
    bg = 'bg1',
    // ViewProps
    isBorder,
    outlineStyle,
    // TouchableOpacityProps
    activeOpacity = 0.9,
    viewStyle,
    children,
    onPress,
  }) => {
    const borderColor = useThemeColor({}, isBorder ? 'border' : bg);

    return (
      <BounceableView viewStyle={[defaultStyle.outline, outlineStyle]} onPress={onPress}>
        <TouchableOpacity
          style={[defaultStyle.bg, viewStyle, { borderWidth: isBorder && 1, borderColor }]}
          {...{ lightBg, darkBg, bg, activeOpacity }}
        >
          {children}
        </TouchableOpacity>
      </BounceableView>
    );
  },
);

const defaultStyle = StyleSheet.create({
  outline: {
    marginBottom: '6%',
  },
  bg: {
    borderRadius: 20,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: '#888888',
    shadowOpacity: 0.4,
    elevation: 1,
  },
});
