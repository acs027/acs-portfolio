import React, { useState } from 'react';
import { StyleSheet, Pressable, useColorScheme } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';
import { SKILLS } from '@/constants/Skills';


const SkillsView: React.FC = () => {
    const theme = useColorScheme();
  return (
    <ThemedView style={styles.sectionContainer}>
      <ThemedText type="subtitle">SKILLS</ThemedText>
      {SKILLS.map((category) => (
        <ThemedView key={category.title} style={styles.skillCategory}>
          <ThemedText type="defaultSemiBold" style={styles.categoryTitle}>
            {category.title}
          </ThemedText>
          <ThemedView style={styles.skillsGrid}>
            {category.skills.map((skill) => {
              if (!skill.Icon) return null;
              const SkillIcon = skill.Icon;
              return (
                <Pressable
                  key={skill.name}
                  style={({ pressed, hovered }) => [
                    theme === 'dark' ? styles.darkSkillBadge : styles. lightSkillBadge,
                    pressed && styles.pressed,
                    hovered && styles.hovered, // Web hover effect
                  ]}
                >
                  <SkillIcon size={32} />
                  <ThemedText style={theme === 'dark' ? styles.darkSkillText : styles.lightSkillText}>{skill.name}</ThemedText>
                </Pressable>
              );
            })}
          </ThemedView>
        </ThemedView>
      ))}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    gap: 16,
    marginBottom: 24,
    alignItems: 'center',
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    // justifyContent: '',
    maxWidth: 876,
  },
  skillCategory: {
    marginTop: 24,
  },
  categoryTitle: {
    opacity: 0.8,
    marginBottom: 8,
  },
  darkSkillBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    width: 210,
    height: 60,
    transition: 'all 0.2s ease-in-out',
  },
  lightSkillBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    justifyContent: 'space-between',
    backgroundColor: '#DDD',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    width: 210,
    height: 60,
    transition: 'all 0.2s ease-in-out',
  },
  darkSkillText: {
    color: '#000',
    fontWeight: 'bold',
  },
  lightSkillText: {
    color: '#000',
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.8, // Effect when pressed on mobile
  },
  hovered: {
    transform: [{ scale: 1.05 }], // Slightly increase size on hover
    backgroundColor: '#f0f0f0', // Change background color on hover
  },
});

export default SkillsView;
