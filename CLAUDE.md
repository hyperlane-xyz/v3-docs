# Hyperlane V3 Docs - Development Guidelines

## Build & Development Commands
- `yarn install` - Install dependencies
- `yarn start` - Start development server with browser window
- `yarn dev` - Start development server without opening browser
- `yarn build` - Generate static content in build directory
- `yarn serve` - Serve built website locally
- `yarn clear` - Clear build cache

## Code Style Guidelines

### TypeScript
- Use TypeScript for all components and utilities
- Define explicit type interfaces for component props
- Use type exports and named exports

### React Components
- Use functional components with hooks
- Keep components focused on single responsibility
- Use destructuring for props
- Provide default values for optional props

### Imports
- Use absolute imports from registry packages
- Group imports: React → External libraries → Local components/utils
- Import only what's needed

### Formatting
- Use 2-space indentation
- Use camelCase for variables and functions
- Use PascalCase for component names and types
- Use proper JSX element closing and line breaks

### Documentation
- MDX content goes in the `docs` folder
- Follow docusaurus conventions for frontmatter
- Add new pages to the sidebars.js file

## Documentation Hierarchy Improvement Notes
- Create a consistent learning path from basics to advanced concepts
- Use progressive disclosure pattern (basic concepts first, then advanced)
- Group related concepts together (e.g., all ISM types in one section)
- Maintain logical flow between sections (each builds on previous knowledge)
- Reduce nesting in sidebar (aim for max 3 levels where possible)
- Use clear, consistent naming conventions for all sections
- Ensure quickstart guides are self-contained but link to detailed reference docs