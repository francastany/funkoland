import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig'; 

const firestoreFetchDetail = async (id) => {
    
    const docRef = doc(db, "funkos", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        return {
            id: parseInt(id),
            ...docSnap.data()
        }
    } else {
        console.log("No such document!")
    }
}

export default firestoreFetchDetail;