const infoBox = document.getElementById("info-box");
const stepTitle = document.getElementById("step-title");
const stepDescription = document.getElementById("step-description");
const closeBtn = document.getElementById("close-btn");

const stepData = {
  1: { title: "Step 01: Initiation", description: "This step involves brainstorming and defining the project scope." },
  2: { title: "Step 02: Planning", description: "Create a detailed roadmap, assign responsibilities, and set milestones." },
  3: { title: "Step 03: Execution", description: "Implement the plan, monitor progress, and manage resources efficiently." },
  4: { title: "Step 04: Evaluation", description: "Assess performance, identify risks, and optimize processes." },
  5: { title: "Step 05: Delivery", description: "Finalize outputs, present results, and collect feedback for improvement." }
};

document.querySelectorAll("area").forEach(area => {
  area.addEventListener("click", (e) => {
    e.preventDefault();
    const step = e.target.dataset.step;
    stepTitle.textContent = stepData[step].title;
    stepDescription.textContent = stepData[step].description;
    infoBox.classList.remove("hidden");
  });
});

closeBtn.addEventListener("click", () => {
  infoBox.classList.add("hidden");
});
