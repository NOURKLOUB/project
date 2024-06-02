import Subtitle from "./Subtitle";
import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
    const [value,setValue]= useState(false)
  return (
    <div>
      <header>
        <nav>
          <div className="flex">
            <img
              src="/public/logo-light.svg"
              loading="lazy"
              alt="photo"
              width={142}
            />
            <a className="btn-1">
              <i className="bi bi-columns-gap"></i> cetagyre
              <div className="subtitle">
                <Subtitle />
              </div>
            </a>
          </div>
          <div>
            <ul className="flexed">
              <li>demos</li>
              <li>Pages</li>
              <li>Accounts</li>
              <li>Megamenu</li>
            </ul>
          </div>
          <div className="flex">
            <form>
              <input type="search" placeholder="search" />
              <button className="apsol" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
            <i className="bi bi-list" onClick={() => {setValue(true)}}></i>
            <img
              className="black"
              src="/public/01.jpg"
              width={50}
              alt="photo-1"
            />
          </div>
        </nav>
      </header>
      {value && 
       <div className="shwo-drop borders">
      <i className="bi bi-x" onClick={() => {setValue(false)}}></i>
      <ul style={{textAlign:'center',padding:'100px'}}>
              <li style={{paddingBottom:'30px'}}>demos</li>
              <li style={{paddingBottom:'30px'}}>Pages</li>
              <li style={{paddingBottom:'30px'}}>Accounts</li>
              <li style={{paddingBottom:'30px'}}>Megamenu</li>
            </ul>
      </div>
      }
     
    </div>
  );
}
