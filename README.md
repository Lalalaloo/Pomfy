Pomfy: 
A minimal lofi-inspired Pomodoro timer with draggable widgets and ambient backgrounds.

This project was built as a learning-focused deep dive into React hooks, timer logic, and state architecture.
I chose this project to push my react skills without relying on tutorials.

Pomfy Screenshot:
<img width="3842" height="1879" alt="scrnli_7XtRahOBF6dhaJ" src="https://github.com/user-attachments/assets/e76c3d36-081c-490e-a6da-40e48f28a490" />

Live Demo:
https://pomfy-fhpp.vercel.app/

Features:
- **Pomodoro Timer** - 25min work sessions, 5min short breaks, 15min long breaks
- **Session & Cycle Tracking** - Visual hearts fill up as you complete sessions
- **Draggable Cards** - Position your timer and to-do list anywhere on screen
- **To-Do List** - Add, edit, delete, and check off tasks (completed items sink to bottom)
- **Sound Notifications** - Different sounds for work time vs break time
- **Background Switcher** - Cycle through lofi animated backgrounds

Tech Stack:
- React 18
- Custom Hooks
- Lucide React (icons)
- CSS
- Vite
- Vercel

What I Learned:
- Complex state management across multiple hooks
- Event handling (mouse events, drag logic with offsets)
- Component composition and prop drilling
- Debugging circular dependencies
- useEffect cleanup and dependency arrays

Bugs I Fixed:
- Timer skipping minutes (fixed by using single time state)
- Circular dependency between timer and pomodoro hooks
- Draggable cards jumping on click (solved with offset calculation)
- Cards dragging outside viewport (added boundary detection)

Through this entire building process, i was using Excalidraw to plan. I'll link it below.
!!WARNING!!.. It's really really messy, with 100099420394 spelling mistakes, but it does show my thoughts.
https://excalidraw.com/#json=YD-v5GBZ2f7UVMrNKWgJ2,5cDq9buF9C4O5YQBS
  

