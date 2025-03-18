import { useState, useEffect } from "react";
import { db } from "../../authentication/firebase.js";
import { collection, getDocs, deleteDoc, doc, addDoc, updateDoc } from "firebase/firestore";

const EditArtists = () => {
  const [artists, setArtists] = useState([]);
  const [newArtist, setNewArtist] = useState({
    Name: "",
    Image: "",
    Type: "",
    Location: "",
    Available: "",
    Experience: ""
  });
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
    setNewArtist({ Name: "", Image: "", Type: "", Location: "", Available: "", Experience: "" });
  };

  const handleEdit = (id) => {
    const artistToEdit = artists.find((artist) => artist.id === id);
    setEditingArtist(artistToEdit);
  };

  const handleUpdate = async () => {
    await updateDoc(doc(db, "artists", editingArtist.id), editingArtist);
    setArtists(artists.map((artist) => (artist.id === editingArtist.id ? editingArtist : artist)));
    setEditingArtist(null);
  };

  return (
    <div className="p-6 min-h-screen bg-white text-black">
      <h1 className="text-3xl font-bold text-yellow-600 mb-6 text-center">Manage Artists</h1>


      {/* Add New Artist */}
      <div className="mb-6 p-6 text-gray-800 bg-white rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Add New Artist</h2>
        {Object.keys(newArtist).map((key) => (
          <input
            key={key}
            type={key === "Experience" ? "number" : "text"}
            placeholder={key}
            value={newArtist[key]}
            onChange={(e) => setNewArtist({ ...newArtist, [key]: e.target.value })}
            className="p-3 mb-3 w-full bg-gray-200 text-gray-900 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
        <button onClick={handleAdd} className="mt-3 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
          Add Artist
        </button>
      </div>

      {/* Artists List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artists.map((artist) => (
          <div key={artist.id} className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 flex flex-col items-center">
            <img src={artist.Image} alt={artist.Name} className="w-40 h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-lg font-semibold text-gray-900">{artist.Name}</h2>
            <p className="text-gray-600">{artist.Type}</p>
            <p className="text-gray-700">{artist.Location}</p>
            <p className="text-blue-600 font-semibold">Experience: {artist.Experience} shows</p>
            <p className="text-green-600">Available: {artist.Available}</p>
            <div className="flex gap-4 mt-4">
              <button onClick={() => handleEdit(artist.id)} className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
                Edit
              </button>
              <button onClick={() => handleDelete(artist.id)} className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600 transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>


      {/* Edit Artist Form */}
      {editingArtist && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Edit Artist</h2>
            {Object.keys(editingArtist).map(
              (key) =>
                key !== "id" && (
                  <input
                    key={key}
                    type={key === "Experience" ? "number" : "text"}
                    value={editingArtist[key]}
                    onChange={(e) => setEditingArtist({ ...editingArtist, [key]: e.target.value })}
                    className="p-3 mb-3 w-full bg-gray-200 text-gray-900 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )
            )}
            <div className="flex gap-4 mt-4">
              <button onClick={handleUpdate} className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
                Update
              </button>
              <button onClick={() => setEditingArtist(null)} className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600 transition">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default EditArtists;
