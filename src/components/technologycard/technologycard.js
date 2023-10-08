import React from "react";
import './technologycard.css'
export function Technologycard() {
    const array = [
        { name: "Data Scienest1", content: "4.04.0 concepts and technologies can be applied across all types concepts and technologies can be applied across all types", style:{},image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPrk1lJAiEo2oHVppMLVUdZgMMVnL95h1r9Q&usqp=CAU" },
        { name: "Data Scienest2", content: "text2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPrk1lJAiEo2oHVppMLVUdZgMMVnL95h1r9Q&usqp=CAU" },
        { name: "Data Scienest3", content: "text3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPrk1lJAiEo2oHVppMLVUdZgMMVnL95h1r9Q&usqp=CAU" },
        { name: "Data Scienest4", content: "text4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPrk1lJAiEo2oHVppMLVUdZgMMVnL95h1r9Q&usqp=CAU" },
    ]
    const title = "Learn 4.0 Technologies"
    const paragraph ="Industry 4.0 concepts and technologies can be applied across all types of industrial companies, including discrete and process manufacturing, as well as oil and gas, mining and other industrial segments"
   
    return (
        <>
            <div className="container-fluid">
                <div className="card-text bg-info " style={{height:"100%", textAlign:"center", padding: "40px"}}>
                    <h1>{title}</h1>
                    <p>{paragraph}</p>
                    <div className="container">
                        <div className="row">
                            {array.map((item) => (
                                <div className="col-md-6" key={item.name} style={{margin: "10px 0px 10px 0px"}}>
                                    <div className="card" style={{borderTop:" solid 5px red"}}>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">{item.content}</p>
                                        </div>
                                        <div className="d-flex justify-content-end align-items-end" style={{padding:"10px"}}>
                                            <img
                                                src={item.image}
                                                className="img-fluid" 
                                                style={{ height: "20%", width: "20%" }}
                                                alt={item.name}
                                            />
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>


        </>
    );
}