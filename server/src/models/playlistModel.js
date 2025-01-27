 import db from "../config/database.js"

 export const getOwnedPlaylist = async(userId) => {
    const [response] = await db.promise().query(
        `SELECT id, title
        FROM playlists
        WHERE id = ?`, [userId]
    );
    console.log("model:", response);
    return response;
    
 }