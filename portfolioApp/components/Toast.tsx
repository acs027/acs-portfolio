import { useEffect } from 'react';
import { StyleSheet, Animated, useColorScheme } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

interface Props {
  message: string;
  isVisible: boolean;
  onHide: () => void;
}

export function Toast({ message, isVisible, onHide }: Props) {
  const opacity = new Animated.Value(0);
  const theme = useColorScheme();

  useEffect(() => {
    if (isVisible) {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.delay(2000),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => onHide());
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <ThemedView style={theme === 'dark' ? styles.darkToast : styles.lightToast}>
        <ThemedText>{message}</ThemedText>
      </ThemedView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
      top: 0,
     bottom: 0,
     left: 0,
     right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  darkToast: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    shadowColor: '#FFF',
    shadowRadius: 3,
    backgroundColor: '#000',
  },
  lightToast: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowRadius: 3,
    backgroundColor: '#FFF',
  },
}); 