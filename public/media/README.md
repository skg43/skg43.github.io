# Project media

Place optimized project media in this folder.

Recommended filenames:

- `vesicle-shape-transitions.mp4`
- `nuclear-pore-transport.mp4`
- `phase-separation-wetting.mp4`
- `egfr-modeling.png`

For video, prefer MP4 (H.264), 16:9, muted-friendly, and approximately 6–15 seconds. Keep each web preview below roughly 10 MB when practical.

To display a file, add this property to its project entry in `src/App.tsx`:

```ts
media: {
  type: "video",
  src: "./media/vesicle-shape-transitions.mp4",
  alt: "Coarse-grained simulation of osmotic vesicle shape transitions",
  caption: "Osmotically induced vesicle shape transitions in a finite reservoir.",
},
```

For an image, use `type: "image"` and provide its path, alternative text, and an optional caption.
