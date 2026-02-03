# Jay Gondalia Portfolio - Technical Specification

## Component Inventory

### shadcn/ui Components (Built-in)
- `button` - Primary and secondary buttons
- `card` - Project cards, skill cards
- `input` - Contact form fields
- `textarea` - Contact form message
- `badge` - Tech stack tags
- `separator` - Section dividers
- `scroll-area` - Smooth scrolling container

### Third-Party Registry Components
None required - custom implementations preferred for this 3D portfolio.

### Custom Components

| Component | Purpose | Props |
|-----------|---------|-------|
| `Hero3D` | 3D scene with character | `scrollProgress: number` |
| `Character` | 3D character model | `animationState: string` |
| `CityScene` | Background city/environment | `parallaxOffset: number` |
| `ScrollCounter` | Animated progress counter | `progress: number` |
| `SkillCard` | Animated skill category card | `skill: SkillData, index: number` |
| `ProjectCard` | Project showcase card | `project: ProjectData` |
| `TimelineItem` | Experience timeline entry | `experience: ExperienceData, side: 'left' \| 'right'` |
| `ContactForm` | Functional contact form | `onSubmit: Function` |
| `AnimatedSection` | Scroll-triggered wrapper | `children, animation: string` |
| `GradientText` | Gradient typography effect | `children, className` |
| `FloatingBadge` | Award/achievement badge | `badge: BadgeData` |

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| 3D Character Journey | Three.js + React Three Fiber | Scroll-driven camera following character on path | High |
| Scroll Progress Counter | GSAP | ScrollTrigger updates counter value | Medium |
| Hero Text Reveal | GSAP | SplitText with staggered character animation | Medium |
| Section Fade-ins | GSAP ScrollTrigger | Intersection-based opacity/translate animations | Low |
| Skill Cards Stagger | GSAP | Staggered translateY + opacity on scroll | Medium |
| Timeline Draw | GSAP | SVG path animation synced with scroll | Medium |
| Project Card Hover | CSS + Framer Motion | Scale, shadow, image zoom transitions | Low |
| Button Hover Effects | CSS Transitions | Scale, shadow, color transitions | Low |
| Parallax Background | GSAP ScrollTrigger | Multi-layer parallax at different speeds | Medium |
| Counter Animation | GSAP | Number counting animation for stats | Low |
| Form Focus States | CSS Transitions | Border color, shadow transitions | Low |
| Navigation Scroll | CSS | Background opacity change on scroll | Low |
| Card Lift Effect | CSS Transitions | translateY + box-shadow on hover | Low |
| Gradient Text | CSS | Background-clip gradient animation | Low |
| Award Badges Float | CSS Animation | Subtle floating animation | Low |

## Animation Library Choices

### Primary: GSAP + ScrollTrigger
- **Rationale**: Best-in-class scroll-driven animations, precise control, excellent performance
- **Use for**: All scroll-triggered animations, timeline sequences, counter animations

### Secondary: React Three Fiber + Three.js
- **Rationale**: React integration for 3D, declarative 3D scene composition
- **Use for**: 3D character, environment, camera controls

### Tertiary: Framer Motion
- **Rationale**: Simple React animations, gesture support
- **Use for**: Hover effects, simple transitions, AnimatePresence

### CSS Animations
- **Rationale**: Performance, simplicity for basic effects
- **Use for**: Button hovers, link underlines, floating effects

## Project File Structure

```
app/
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn components
│   │   ├── 3d/
│   │   │   ├── Hero3D.tsx         # Main 3D scene
│   │   │   ├── Character.tsx      # 3D character model
│   │   │   ├── CityScene.tsx      # Background environment
│   │   │   └── ScrollCamera.tsx   # Camera controller
│   │   ├── sections/
│   │   │   ├── Hero.tsx           # Hero section
│   │   │   ├── About.tsx          # About/intro section
│   │   │   ├── Skills.tsx         # Skills grid
│   │   │   ├── Experience.tsx     # Timeline
│   │   │   ├── Projects.tsx       # Projects showcase
│   │   │   ├── Education.tsx      # Education & certs
│   │   │   ├── Contact.tsx        # Contact section
│   │   │   └── Footer.tsx         # Footer
│   │   ├── animations/
│   │   │   ├── ScrollCounter.tsx  # Progress counter
│   │   │   ├── AnimatedSection.tsx # Scroll wrapper
│   │   │   ├── GradientText.tsx   # Gradient typography
│   │   │   └── TimelineLine.tsx   # Animated timeline
│   │   └── shared/
│   │       ├── SkillCard.tsx      # Skill category card
│   │       ├── ProjectCard.tsx    # Project card
│   │       ├── TimelineItem.tsx   # Timeline entry
│   │       └── ContactForm.tsx    # Contact form
│   ├── hooks/
│   │   ├── useScrollProgress.ts   # Scroll position hook
│   │   ├── useInView.ts           # Intersection observer hook
│   │   └── useMediaQuery.ts       # Responsive hook
│   ├── lib/
│   │   ├── utils.ts               # Utility functions
│   │   └── animations.ts          # Animation presets
│   ├── types/
│   │   └── index.ts               # TypeScript types
│   ├── data/
│   │   ├── skills.ts              # Skills data
│   │   ├── projects.ts            # Projects data
│   │   ├── experience.ts          # Experience data
│   │   └── education.ts           # Education data
│   ├── App.tsx                    # Main app
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Global styles
├── public/
│   ├── models/                    # 3D models
│   ├── images/                    # Images
│   └── fonts/                     # Custom fonts
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## Dependencies to Install

### Core
```bash
# Already included in webapp-building skill
# react, react-dom, typescript, vite, tailwindcss
```

### Animation Libraries
```bash
npm install gsap @gsap/react
npm install three @react-three/fiber @react-three/drei
npm install framer-motion
```

### UI Components
```bash
npx shadcn add button card input textarea badge separator scroll-area
```

### Utilities
```bash
npm install lucide-react
npm install clsx tailwind-merge
```

## 3D Implementation Strategy

### Character Model
- Use simplified low-poly 3D model (GLTF/GLB format)
- Alternative: Procedurally generated with Three.js primitives
- Animation: Scroll-driven position/rotation
- Materials: Toon shading for stylized look

### Environment
- City skyline: Silhouette planes at different depths
- Ground: Simple plane with gradient
- Sky: Gradient background or shader
- Props: Wind turbines, buildings (low-poly)

### Camera System
- Scroll controls camera position along path
- Path follows character journey
- Smooth transitions between sections
- Parallax layers at different scroll speeds

### Performance
- Use instanced meshes for repeated elements
- LOD (Level of Detail) for distant objects
- Frustum culling
- Texture compression

## Responsive Strategy

### Desktop (> 1024px)
- Full 3D experience
- All animations enabled
- Multi-column layouts

### Tablet (768px - 1024px)
- Simplified 3D (reduced complexity)
- 2-column grids
- Touch-optimized interactions

### Mobile (< 768px)
- 2D fallback or highly simplified 3D
- Single column layouts
- Reduced animation complexity
- Hamburger navigation

## Accessibility

- `prefers-reduced-motion`: Disable complex animations
- Keyboard navigation support
- ARIA labels on interactive elements
- Color contrast compliance (WCAG AA)
- Focus indicators

## Performance Targets

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
- 60fps for all animations
