import React from 'react'

const Newsitem =(props)=> {
        let {title,description,imageUrl,newsurl,author,date}=props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={!imageUrl?"https://cdn.ndtv.com/common/images/ogndtv.png":imageUrl}  className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}<span className="badge rounded-pill bg-success">New</span></h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
                            <a  rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark ">Read More..</a>
                        </div>
                </div>
            </div>
        )
    }
export default Newsitem
