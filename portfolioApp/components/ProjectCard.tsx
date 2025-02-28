import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';
import { ExternalLink } from './ExternalLink';
import { Platform } from 'react-native';
import { Dimensions } from 'react-native';

type ProjectCardProps = {
  title: string;
  repoLink: string;
  appStoreLink?: string;
  description: string;
  techStack?: string[];
  images?: string[];
  gif?: string[];
};

const SCREEN_WIDTH = Dimensions.get('window').width;

const ProjectCard: React.FC<ProjectCardProps> = ({ title, repoLink, appStoreLink, description, techStack, images, gif }) => {
  return (
    <ThemedView style={styles.projectCard}>
      <ThemedView style={styles.projectContent}>
        <ThemedView>
          <ThemedText type="title">{title}</ThemedText>
          <ExternalLink href={repoLink}>
            <ThemedText type="link">View in GitHub</ThemedText>
          </ExternalLink>
          {
          appStoreLink &&
          <ExternalLink href={appStoreLink}>
            <ThemedText type="link">View in AppStore</ThemedText>
          </ExternalLink>
          }
        </ThemedView>

        <ThemedText>{description}</ThemedText>

          {
            techStack &&
            <ThemedView>
            <ThemedText type="defaultSemiBold">Tech Used</ThemedText>
            <ThemedText>{techStack.join(' ')}</ThemedText>
          </ThemedView>
          }
        

        <ThemedView style={styles.projectImageContainer}>
          <ThemedView style={styles.deviceImagesContainer}>
            {images &&
            images.map((uri, index) => (
              <ThemedView key={index} style={styles.deviceImagesContent}>
                <Image 
                  source={{ uri }}
                  style={styles.deviceImage}
                />
              </ThemedView>
            ))}
            {gif &&
            gif.map((uri, index) => (
              <ThemedView key={index} style={styles.deviceImagesContent}>
                <Image 
                  source={{ uri }}
                  style={styles.deviceGIF}
                />
              </ThemedView>
            ))}
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  projectCard: {
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000000',
    shadowRadius: 5,
    // backgroundColor: Platform.select({
    //   ios: '#00000008',
    //   default: '#00000005',
    // }),
    // backgroundColor: "#ffffff",
    width: "90%",
  },
  projectContent: {
    gap: 8,
    padding: 10,
  },
  deviceImagesContainer: {
    marginVertical: 12,
    flexDirection:"row",
    flexWrap:"wrap",
    // // alignItems: "center",
  },
  deviceImagesContent: {
    gap: 12,
    paddingHorizontal: 4,
  },
  deviceImage: {
    width: SCREEN_WIDTH * 0.9 < 300 ? "80%" : 300,
    aspectRatio: 1/2,
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
     borderColor: Platform.select({
       ios: '#00000015',
       default: '#00000010',
     }),
  },
  deviceGIF: {
    width: SCREEN_WIDTH * 0.9 < 280 ? "80%" : 280,
    aspectRatio: 28/60,
    borderRadius: 16,
    marginLeft: 10,
    borderWidth: StyleSheet.hairlineWidth,
    // borderColor: Platform.select({
    //   ios: '#00000015',
    //   default: '#00000010',
    // }),
  },

  projectImageContainer: {
    alignItems: "center",
  }
}); 

export default ProjectCard;
