/* =====================================================================
   DECK CONTENT: "Building SUU's Future with Student Workers"
   ---------------------------------------------------------------------
   This is the ONE file to edit for wording, slide order, notes, and
   timing. Save it, then refresh "Supervisor Training Slidedeck.html".
   The HTML file only holds layout and styling.

   QUICK RULES
   - Text goes inside "double quotes". Keep the comma at the end of lines.
   - *word*    shows the word in SUU red
   - **word**  shows the word in bold
   - notes, minutes, and ref are for you only. They never appear on screen.
     (ref = the slide number in LAYOUT.md)
   - Reorder slides by moving whole { ... } blocks. Keep every id unique.
   - If the deck shows a red "content error" banner after an edit, you
     are usually missing a comma or a closing quote near your change.

   ASKING AN AI AGENT FOR A CHANGE
   Leave a comment that starts with  // TWEAK:  next to what you want
   changed. The agent finds every TWEAK, makes the change (here for
   wording, in the HTML for visual/layout changes), then deletes the
   comment. Examples:
       head: "Value-Driven Mentorship",   // TWEAK: make this one line
       // TWEAK: swap the order of slides one-on-one and feedback
   After changes, run ./export-pdf.sh to refresh the PDF.

   PLANNED TIME: 46 min (sum of `minutes` below; the title reprise has none)

   LAYOUTS: the `layout` field, and the fields each one reads
     title          eyebrow, title, presenters[{name, role}], tag{lines[], small}
     title-reprise  newTitle (everything else is copied from the "title" slide;
                    click once to cross out the old title)
     divider        num, title, sub
     cards          eyebrow, head, subhead, lead (optional red first card),
                    cards[{idx, title, text}]
     points         eyebrow, head, subhead, items[{title, sub}],
                    reveal (true = one item per click)
     question       eyebrow, text, sub (optional). Big-type discussion slide.
     balance        eyebrow, problem, head, split (left %), left{label, sub},
                    right{label, sub}
     problem-web    eyebrow, problem, head, core{before, after}, related[]
                    (1-8 labels; "" = unlabeled). Click 1: core becomes the
                    starred student project. Click 2: related problems X out.
     people         eyebrow, problem, head, studentLabel, limited, realized,
                    revealSecond (true = the REALIZED row appears on click)
     campus         eyebrow, head, subhead, buildings[{idx, title, text}] (1-4).
                    A supervisor and two interns walk to one building per
                    click; its title and text appear when they arrive.
     qr             eyebrow, head, lede, image, joinAt, code
     outro          (SUU logo only; a red lightning strike reveals it)
   ===================================================================== */

window.DECK = {
  meta: {
    brand: "SUU · Supervisor Training", // top-left chip on content slides
  },

  // Colors for the slide 9 workload bar. SUU red is fixed in the HTML.
  theme: {
    blue: "#2F5F8A",  // Reactive workload
    green: "#3C7A4E", // Proactive workload
  },

  // Top-right navigation. `to` is a slide id below.
  nav: [
    { label: "Overview", to: "overview" },
    { label: "Mentor", to: "mentor" },
    { label: "Empower", to: "empower" },
    { label: "Retain", to: "retain" },
  ],

  slides: [
    // ------------------------------------------------------------ OPENING
    {
      id: "title",
      layout: "title",
      ref: 0,
      eyebrow: "Annual Supervisor Training",
      title: "Building SUU's Future with *Student Workers*",
      presenters: [
        { name: "Nathan Wiggins", role: "Director of Research Analytics" },
        { name: "Owen Chadwick", role: "Lead Research Analytic Intern" },
        { name: "Josi Bartholomew", role: "Lead Research Analytic Intern" },
      ],
      tag: { lines: ["Mentor", "Empower", "Retain"], small: "Southern Utah University" },
      notes: "",
    },
    {
      id: "overview",
      layout: "cards",
      ref: 1,
      minutes: 2,
      eyebrow: "Presentation Overview",
      head: "Mentor, Empower, Retain",
      subhead: "",
      cards: [
        { idx: "01", title: "Mentor", text: "Mentoring student workers to focus on values, goals, and training opportunities" },
        { idx: "02", title: "Empower", text: "Empowering student workers to combine their unique skill sets with positive mindsets" },
        { idx: "03", title: "Retain", text: "Retaining student workers after graduation to strengthen SUU's future workforce" },
      ],
      notes: "",
    },

    // ------------------------------------------------------------- MENTOR
    {
      id: "mentor",
      layout: "divider",
      num: "01",
      title: "Mentor",
      sub: "Mentoring student workers to focus on values, goals, and training opportunities",
    },
    {
      id: "mentor-value-question",
      layout: "question",
      ref: 2,
      minutes: 5,
      eyebrow: "Mentor · Discussion",
      text: "What is something you *value* as a supervisor?",
      notes: "Sticky Notes Activity",
    },
    {
      id: "value-driven-mentorship",
      layout: "cards",
      ref: 3,
      minutes: 2,
      eyebrow: "Mentor",
      head: "Value-Driven Mentorship",
      subhead: "Focusing on values can increase your ability to mentor your student worker",
      lead: "Values drive",
      cards: [
        { idx: "", title: "Goals", text: "What a student values shapes the goals they will actually commit to." },
        { idx: "", title: "Training Interests", text: "Values point to the skills a student wants to learn, and the ones they could teach." },
        { idx: "", title: "Workplace Behavior", text: "Students show up differently when their work connects to what matters to them." },
        { idx: "", title: "Individual Growth", text: "Values give you a way to talk about growth beyond the job description." },
      ],
      notes: "",
    },
    {
      id: "one-on-one",
      layout: "points",
      ref: 4,
      minutes: 5,
      eyebrow: "Mentor",
      head: "What does a one-on-one with a student actually look like?",
      subhead: "",
      reveal: true,
      items: [
        { title: "Identify or Review Values", sub: "" },
        { title: "Set or Reflect on Individual Goals", sub: "" },
        { title: "Identify Desired Trainings", sub: "To receive & to give" },
        { title: "Rotating Discussion Questions", sub: "" },
        { title: "Two-Way Feedback", sub: "" },
      ],
      notes: "",
    },
    {
      id: "mentoring-question",
      layout: "question",
      ref: 5,
      minutes: 3,
      eyebrow: "Mentor · Discussion",
      text: "What impactful experiences have you had *mentoring* a student?",
      notes: "",
    },
    {
      id: "feedback",
      layout: "points",
      ref: 6,
      minutes: 2,
      eyebrow: "Mentor",
      head: "Feedback for Student Workers",
      subhead: "Things to keep in mind",
      reveal: false,
      items: [
        { title: "Your student worker is more stressed than you realize", sub: "" },
        { title: "Students respond well to feedback when you establish yourself as a mentor", sub: "" },
        { title: "You don't have to tackle hard situations alone", sub: "" },
      ],
      notes: "",
    },
    {
      id: "students-as-mentors",
      layout: "question",
      ref: 7,
      minutes: 5,
      eyebrow: "Mentor",
      text: "Student Workers as *Mentors*",
      notes: "",
    },

    // ------------------------------------------------------------ EMPOWER
    {
      id: "empower",
      layout: "divider",
      num: "02",
      title: "Empower",
      sub: "Empowering student workers to combine their unique skill sets with positive mindsets",
    },
    {
      id: "mindsets-overview",
      layout: "cards",
      ref: 8,
      minutes: 2,
      eyebrow: "Empower",
      head: "Empowering Student Worker Mindsets",
      subhead: "",
      cards: [
        { idx: "Mindset 01", title: "Balanced-Workload Mindset", text: "Student workers can become even more productive when their workload allows them to work and develop simultaneously" },
        { idx: "Mindset 02", title: "Problem-Solving Mindset", text: "Student workers can build massive efficiency gains when given the autonomy to work as problem solvers" },
        { idx: "Mindset 03", title: "Emerging-Professional Mindset", text: "Student workers can bring more to their team when they are viewed as equal contributors" },
      ],
      notes: "",
    },
    {
      id: "balanced-workload",
      layout: "balance",
      ref: 9,
      minutes: 3,
      eyebrow: "Empower · Mindset 01",
      problem: "If I don't stay on top of giving my student worker a list of tasks, they just sit there.",
      head: "Balanced-Workload Mindset",
      split: 50,
      left: { label: "Reactive Workload", sub: "Assigned Tasks" },
      right: { label: "Proactive Workload", sub: "Self-Assigned Tasks" },
      notes: "",
    },
    {
      id: "problem-solving",
      layout: "problem-web",
      ref: 10,
      minutes: 3,
      eyebrow: "Empower · Mindset 02",
      problem: "Half the time, I don't really even know what my student worker is working on.",
      head: "Problem-Solving Mindset",
      core: { before: "Core Problem", after: "Student Project" },
      related: ["", "", "", "", "", ""],
      notes: "",
    },
    {
      id: "not-just-a-student-worker",
      layout: "people",
      ref: 11,
      minutes: 3,
      eyebrow: "Empower · Mindset 03",
      problem: "I have a lot on my plate, but I can't assign that out to them because they're just a student worker.",
      head: "Not \"Just a Student Worker\" Mindset",
      studentLabel: "Student Worker",
      limited: "Student potential can be **LIMITED**",
      realized: "Student potential can be *REALIZED*",
      revealSecond: true,
      notes: "",
    },
    {
      id: "exceed-question",
      layout: "question",
      ref: 12,
      minutes: 3,
      eyebrow: "Empower · Discussion",
      text: "When have you seen a student worker *exceed* your expectations?",
      notes: "",
    },
    {
      id: "title-reprise",
      layout: "title-reprise",
      ref: 13,
      newTitle: "Odds are, your student worker is *smarter than you*",
      notes: "",
    },

    // ------------------------------------------------------------- RETAIN
    {
      id: "retain",
      layout: "divider",
      num: "03",
      title: "Retain",
      sub: "Retaining student workers after graduation to strengthen SUU's future workforce",
    },
    {
      id: "slido",
      layout: "qr",
      ref: 14,
      minutes: 5,
      eyebrow: "Retain · Slido",
      head: "Join on Slido",
      lede: "Scan the code with your phone's camera to join.",
      image: "assets/slido-qr.png",
      joinAt: "slido.com", // leave "" to hide
      code: "#3961 349",   // leave "" to hide
      notes: "",
    },
    {
      id: "suu-community",
      layout: "campus",
      ref: 15,
      minutes: 3,
      eyebrow: "Retain",
      head: "Integration into the SUU Community",
      subhead: "Ideas",
      buildings: [
        { idx: "01", title: "SUU Structure Training", text: "Help students see how SUU's colleges, departments, and offices fit together." },
        { idx: "02", title: "Campus Networking", text: "Introduce students to people across campus, beyond your own office." },
        { idx: "03", title: "Encourage Involvement", text: "Point students toward committees, events, and service that keep them connected." },
      ],
      notes: "Campus Networking: Cynthia Kimball Davis",
    },

    // ------------------------------------------------------------ CLOSING
    {
      id: "outro",
      layout: "outro",
      ref: 16,
    },
  ],
};
