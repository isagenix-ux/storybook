#!/bin/bash

# Create directories
mkdir -p src/stories/Components/{DataDisplay,Feedback,Layout}
mkdir -p src/stories/Foundation
mkdir -p src/stories/Palette

# Move files to their new locations
mv src/stories/MuiAlert.stories.tsx src/stories/Components/Feedback/Alert.stories.tsx
mv src/stories/MuiGrid.stories.tsx src/stories/Components/Layout/Grid.stories.tsx
mv src/stories/Typography.stories.tsx src/stories/Foundation/Typography.stories.tsx

# Update imports and paths in files
find src/stories -name "*.tsx" -type f -exec sed -i '' 's/MUI\//Components\//g' {} + 