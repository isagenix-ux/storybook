# Deployment Checklist

1. Clean build files:
   ```bash
   rm -rf storybook-static
   rm -rf node_modules/.cache
   ```

2. Build and test locally:
   ```bash
   npm run storybook
   ```

3. If local test passes, deploy:
   ```bash
   npm run deploy
   ```

4. Verify deployment at:
   https://isagenix-ux.github.io/storybook/ 