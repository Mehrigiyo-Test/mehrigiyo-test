import './Profession.scss';
import img1 from '../../images/Shape1.png';
import img2 from '../../images/Shape2.png';
import img3 from '../../images/Shape3.png';
import img4 from '../../images/Shape4.png';

export default function Profession() {
    let boxOne;
    let boxTwo;
    let box = [
        
        {
            boxOne:{ 
                photo: img1,
                title: 'Nevropatolog',
                text: '2029 shifokor' 
            },
            boxTwo:{ 
                photo: img1,
                title: 'Nevropatolog',
                text: '2029 shifokor' 
            },
        }
            
    ]
    // { photo: img2, title: 'Genetika', text: '1,870 shifokor' },
    //         { photo: img3, title: 'Stomatologiya', text: '1,064 shifokor' },
    //         { photo: img4, title: 'Jarrohlik', text: '1,064 shifokor' },
// let box = [
//     boxOne = [
//         
//     ],
//     boxTwo = [

//     ]
// ]
let obj =[]
return (
    <>
        <div className="boxOnline">
            {box.map(item => (
                <div className="doctorBox">
                    <img src={item.boxOne.photo} alt="" />
                    <h5>{item.boxOne.title}</h5>
                    <p>{item.boxOne.text}</p>
                </div>
                // item.boxOne.map((item) => (

                //     <div className="doctorBox">
                //         <img src={item.photo} alt="" />
                //         <h5>{item.title}</h5>
                //         <p>{item.text}</p>
                //     </div>
                // ))

            ))}
        </div>
    </>
)
}