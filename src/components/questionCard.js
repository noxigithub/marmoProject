import React from "react";


const QuestionCard = (props) => {

    

    return (
        <div>

            <div className="row d-flex justify-content-center">
                <div className="col-8">
                    <div className="card mt-5 mb-5">
                        <div className="card-header">
                            {props.questionNumber} de {props.totalQuestions}
                        </div>
                        <div className="card-body">

                            <p className="card-text">{props.question}</p>
                            <input  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                ref={props.reference} />

                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default QuestionCard;