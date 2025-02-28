import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedView } from './ThemedView';
import ProjectCard from './ProjectCard';
import { ThemedText } from './ThemedText';


const Projects: React.FC = () => {
  return (
    <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle">FEATURED PROJECTS</ThemedText>

          <ProjectCard 
          title='MyMovieApp' 
          repoLink='https://github.com/acs027/MyMovieApp'
          description='A SwiftUI-based movie app that lets users explore movies and stay updated with the latest releases. This app features API integration for fetching movie data, caching using Core Data, user-friendly interface.'
          techStack={["• SwiftUI", "• Alamofire", "• Core Data", "• TMDB API","• WebKit"]}
          images={['https://github.com/user-attachments/assets/322c26f5-b2c8-458b-8163-0303982a8b43',
            'https://github.com/user-attachments/assets/9483a608-4453-47b0-8cd9-ae9595e82052'
          ]}
          gif={[
            'https://github.com/user-attachments/assets/52409856-b198-4f1b-a7b0-dc1d6f6c996e'
          ]}
          />

          <ProjectCard
            title="Realtime Chat App"
            repoLink="https://github.com/acs027/ChatApp"
            description="This app allows users to communicate in real-time, featuring user authentication, message storage, and user profile photos, all powered by Firebase."
            techStack={["• SwiftUI", "• Firebase Auth", "• Firestore Database", "• Firebase Storage"]}
            images={[
              'https://github.com/user-attachments/assets/330470c6-957a-4d73-be7a-92dfb0eb524b',
              'https://github.com/user-attachments/assets/f7a58bf1-d890-465a-a964-e441b3c2f0b8',
              'https://github.com/user-attachments/assets/dce5ab5d-5524-45fb-a36d-1e06f1c3a837'
            ]}
          />

            <ProjectCard
              title="GLOOMHAVEN ATTACKER"
              repoLink="https://github.com/acs027/Gloomhaven-Attacker"
              appStoreLink="https://apps.apple.com/us/app/gloomhaven-attacker/id6447918398"
              description="Helper app for the Gloomhaven boardgame."
            //   images={[
            //     'https://github.com/user-attachments/assets/330470c6-957a-4d73-be7a-92dfb0eb524b',
            //     'https://github.com/user-attachments/assets/f7a58bf1-d890-465a-a964-e441b3c2f0b8',
            //     'https://github.com/user-attachments/assets/dce5ab5d-5524-45fb-a36d-1e06f1c3a837'
            //   ]}
            />


            <ProjectCard
              title="Insta Profile"
              repoLink="https://github.com/acs027/InstaProfileStudy"
              description="A replica of the Instagram profile screen built using UIKit. This project is designed to practice and enhance my skills with UIKit."
              images={[
                'https://github.com/acs027/InstaProfileStudy/blob/main/screenshots/screenshot1.png?raw=true',
                'https://github.com/acs027/InstaProfileStudy/blob/main/screenshots/screenshot2.png?raw=true'
              ]}
              gif={[
                'https://github.com/acs027/InstaProfileStudy/blob/main/screenshots/app.gif?raw=true'
              ]}
            /> 

            <ProjectCard
              title="XFeed"
              repoLink="https://github.com/acs027/XFeedStudy"
              description="A replica of the X Feed screen built using UIKit. This project is designed to practice and enhance my skills with UIKit."
              images={[
                'https://github.com/acs027/XFeedStudy/blob/main/screenshots/screenshot1.png?raw=true',
              ]}
            />

            </ThemedView>
  );
};

const styles = StyleSheet.create({
    sectionContainer: {
        gap: 16,
        marginBottom: 24,
        alignItems: 'center',
      },
}); 

export default Projects;
