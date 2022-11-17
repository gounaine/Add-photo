import React, { useState } from "react";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import img7 from "./7.jpg";
import img8 from "./8.jpg";

function App() {
  const [tab, settab] = useState([img1, img2, img3,img4,img5,img6,img7,img8]);
  const [t, sett] = useState([]);
  const [v, setv] = useState(false);
  const [Ms,setMs]=useState('');

  console.log(t);

  return (
    <div>

      <div className="img-add">
        <h1><b>Pick your favourite image</b><span  className="material-symbols-outlined spanFirst-add">
heart_plus
</span></h1>
        {tab.map((e, i) => (
          <div className="Add" >
            <img
              className="img-add"
              key={i}
              style={{ width: 300, margin: 10 }}
              src={e}
            />
            
            <button className="btn-add" onClick={() => sett([...t, tab[i]])}>
              <span class="material-icons-outlined">control_point</span>
              <b>Add</b>
            </button>
       
          </div>
        ))}
      </div>
      <div className="list-choisier">
        <button className="button" onClick={() => setv(!v)}>
          <span class="material-icons-outlined">add_shopping_cart</span>{" "}
          {t.length}
        </button>
        <div className="img-scroll">
        {v ? (
          <div className="cl-panier">
            {t.map((ee, j) => (
              <div>
                
                <img key={j} className="img-panier" style={{ width: 100, margin: 10 }} src={ee} />

              </div>
            ))}
            <button type="button" onClick={()=>location.reload()} className="btn btn-danger">Delete All :</button>

          </div>
        ) : null}
        </div>
      </div>
      <div class="mb-3">
 
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Comment for me:"></textarea>
<button type="button" onClick={()=>setMs("thanks for your comment")} className="btn btn-success">send</button>
  <h2 className="success">{Ms}</h2>
</div>

    </div>
  );
}
export default App;
