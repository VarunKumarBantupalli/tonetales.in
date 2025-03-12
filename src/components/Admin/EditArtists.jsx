import { useState, useEffect } from "react";
import { db } from "../../authentication/firebase.js";
import { collection, getDocs, deleteDoc, doc, addDoc, updateDoc } from "firebase/firestore";

const EditArtists = () => {
  const [artists, setArtists] = useState([]);
  const [newArtist, setNewArtist] = useState({ name: "", photo: "", type: "", location: "", rating: "" });
  const [editingArtist, setEditingArtist] = useState(null);

  useEffect(() => {
    const fetchArtists = async () => {
      const querySnapshot = await getDocs(collection(db, "artists"));
      setArtists(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchArtists();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "artists", id));
    setArtists(artists.filter((artist) => artist.id !== id));
  };

  const handleAdd = async () => {
    const docRef = await addDoc(collection(db, "artists"), newArtist);
    setArtists([...artists, { id: docRef.id, ...newArtist }]);
    setNewArtist({ name: "", photo: "", type: "", location: "", rating: "" });
  };

  const handleEdit = async (id) => {
    const artistToEdit = artists.find((artist) => artist.id === id);
    setEditingArtist(artistToEdit);
  };

  const handleUpdate = async () => {
    await updateDoc(doc(db, "artists", editingArtist.id), editingArtist);
    setArtists(artists.map((artist) => (artist.id === editingArtist.id ? editingArtist : artist)));
    setEditingArtist(null);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Manage Artists</h1>
      
      {/* Add Artist Form */}
      <div className="mb-6 p-4 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-3">Add New Artist</h2>
        <input type="text" placeholder="Name" value={newArtist.name} onChange={(e) => setNewArtist({ ...newArtist, name: e.target.value })} className="p-2 mb-2 w-full bg-gray-700 rounded" />
        <input type="text" placeholder="Photo URL" value={newArtist.photo} onChange={(e) => setNewArtist({ ...newArtist, photo: e.target.value })} className="p-2 mb-2 w-full bg-gray-700 rounded" />
        <input type="text" placeholder="Type" value={newArtist.type} onChange={(e) => setNewArtist({ ...newArtist, type: e.target.value })} className="p-2 mb-2 w-full bg-gray-700 rounded" />
        <input type="text" placeholder="Location" value={newArtist.location} onChange={(e) => setNewArtist({ ...newArtist, location: e.target.value })} className="p-2 mb-2 w-full bg-gray-700 rounded" />
        <input type="text" placeholder="Rating" value={newArtist.rating} onChange={(e) => setNewArtist({ ...newArtist, rating: e.target.value })} className="p-2 mb-2 w-full bg-gray-700 rounded" />
        <button onClick={handleAdd} className="mt-2 bg-green-500 px-4 py-2 rounded-md hover:bg-green-600 transition">Add Artist</button>
      </div>
      
      {/* Artists List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artists.map((artist) => (
          <div key={artist.id} className="bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center">
            <img src={artist.photo} alt={artist.name} className="w-40 h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-lg font-semibold text-yellow-400">{artist.name}</h2>
            <p className="text-gray-300">{artist.type}</p>
            <p className="text-gray-400">{artist.location}</p>
            <p className="text-yellow-500 font-semibold">⭐ {artist.rating}</p>
            <div className="flex gap-4 mt-4">
              <button onClick={() => handleEdit(artist.id)} className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition">Edit</button>
              <button onClick={() => handleDelete(artist.id)} className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Artist Form */}
      {editingArtist && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex justify-center items-center p-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-3">Edit Artist</h2>
            <input type="text" value={editingArtist.name} onChange={(e) => setEditingArtist({ ...editingArtist, name: e.target.value })} className="p-2 mb-2 w-full bg-gray-700 rounded" />
            <input type="text" value={editingArtist.photo} onChange={(e) => setEditingArtist({ ...editingArtist, photo: e.target.value })} className="p-2 mb-2 w-full bg-gray-700 rounded" />
            <input type="text" value={editingArtist.type} onChange={(e) => setEditingArtist({ ...editingArtist, type: e.target.value })} className="p-2 mb-2 w-full bg-gray-700 rounded" />
            <input type="text" value={editingArtist.location} onChange={(e) => setEditingArtist({ ...editingArtist, location: e.target.value })} className="p-2 mb-2 w-full bg-gray-700 rounded" />
            <input type="text" value={editingArtist.rating} onChange={(e) => setEditingArtist({ ...editingArtist, rating: e.target.value })} className="p-2 mb-2 w-full bg-gray-700 rounded" />
            <div className="flex gap-4 mt-4">
              <button onClick={handleUpdate} className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-600 transition">Update</button>
              <button onClick={() => setEditingArtist(null)} className="bg-gray-500 px-4 py-2 rounded-md hover:bg-gray-600 transition">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditArtists;
