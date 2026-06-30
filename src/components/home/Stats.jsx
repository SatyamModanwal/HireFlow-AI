// import "./Stats.css";

// function Stats() {

//     const stats = [
//         {
//             number: "10K+",
//             title: "Students"
//         },
//         {
//             number: "95%",
//             title: "Success Rate"
//         },
//         {
//             number: "500+",
//             title: "Companies"
//         },
//         {
//             number: "24/7",
//             title: "Support"
//         }
//     ];

//     return (

//         <section className="stats">

//             {
//                 stats.map((item, index) => (

//                     <div className="stat-card" key={index}>

//                         <h2>{item.number}</h2>

//                         <p>{item.title}</p>

//                     </div>

//                 ))
//             }

//         </section>

//     );

// }

// export default Stats;


import "./Stats.css";

function Stats() {

    const stats = [

        {
            icon:"👨‍🎓",
            number:"10K+",
            title:"Students"
        },

        {
            icon:"🎯",
            number:"95%",
            title:"Success Rate"
        },

        {
            icon:"🏢",
            number:"500+",
            title:"Companies"
        },

        {
            icon:"💬",
            number:"24/7",
            title:"Support"
        }

    ];

    return(

        <section className="stats">

            <h2>Trusted by Students</h2>

            <div className="stats-container">

                {
                    stats.map((item,index)=>(

                        <div className="stat-card" key={index}>

                            <div className="stat-icon">
                                {item.icon}
                            </div>

                            <h3>{item.number}</h3>

                            <p>{item.title}</p>

                        </div>

                    ))
                }

            </div>

        </section>

    )

}

export default Stats;