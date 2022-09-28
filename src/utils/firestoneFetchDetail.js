import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig'; 

const firestoreFetchDetail = async (id) => {
    
    const docRef = doc(db, "funkos", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        return docSnap.data()
    }
}

export default firestoreFetchDetail;