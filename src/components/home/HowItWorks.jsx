import "./HowItWorks.css";

function HowItWorks() {

    const steps = [

        {
            number: "01",
            title: "Create Account",
            description: "Sign up and create your personal profile."
        },

        {
            number: "02",
            title: "Complete Profile",
            description: "Add your skills, education and resume."
        },

        {
            number: "03",
            title: "Practice Interview",
            description: "Take AI mock interviews and improve."
        },

        {
            number: "04",
            title: "Track Jobs",
            description: "Manage all your job applications easily."
        }

    ];

    return (

        <section className="works">

            <h2>How HireFlow AI Works</h2>

            <p>
                Just 4 simple steps to start your placement journey.
            </p>

            <div className="steps">

                {
                    steps.map((step) => (

                        <div className="step-card" key={step.number}>

                            <div className="step-number">
                                {step.number}
                            </div>

                            <h3>{step.title}</h3>

                            <p>{step.description}</p>

                        </div>

                    ))
                }

            </div>

        </section>

    );

}

export default HowItWorks;