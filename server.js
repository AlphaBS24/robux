const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

/* =========================================================
   MAIN PAGE
========================================================= */

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "robux.html"));
});


/* =========================================================
   ROBLOX USER SEARCH
========================================================= */

app.post("/api/roblox-user", async (req, res) => {
  try {
    const username = String(
      req.body?.username || ""
    ).trim();

    if (!username) {
      return res.status(400).json({
        error: "Username is required"
      });
    }

    const response = await fetch(
      "https://users.roblox.com/v1/usernames/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          usernames: [username],
          excludeBannedUsers: false
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: "Roblox request failed"
      });
    }

    if (
      !data.data ||
      !Array.isArray(data.data) ||
      data.data.length === 0
    ) {
      return res.json({
        user: null
      });
    }

    const user = data.data[0];

    /* Search nəticəsində avatar URL-ni server deyil,
       Roblox CDN özü verəcək. */

    let avatar = null;

    try {
      const avatarResponse = await fetch(
        "https://thumbnails.roblox.com/v1/users/avatar-headshot" +
          "?userIds=" +
          encodeURIComponent(user.id) +
          "&size=150x150" +
          "&format=Png" +
          "&isCircular=true"
      );

      if (avatarResponse.ok) {
        const avatarData = await avatarResponse.json();

        avatar =
          avatarData?.data?.[0]?.imageUrl || null;
      }
    } catch {
      avatar = null;
    }

    return res.json({
      user: {
        id: user.id,
        username: user.name,
        displayName: user.displayName || user.name,
        avatar
      }
    });

  } catch {
    return res.status(500).json({
      error: "Internal server error"
    });
  }
});


/* =========================================================
   FRIEND AVATARS
   ONLY ONE REQUEST FOR ALL 8 FRIENDS
========================================================= */

app.get("/api/roblox-friends", async (req, res) => {
  const friendIds = [
    "10511948215",
    "5515654486",
    "5296927626",
    "5069967579",
    "8202950596",
    "9686696956",
    "5344828409",
    "5673860649"
  ];

  try {
    const ids = friendIds.join(",");

    const response = await fetch(
      "https://thumbnails.roblox.com/v1/users/avatar-headshot" +
        "?userIds=" +
        encodeURIComponent(ids) +
        "&size=150x150" +
        "&format=Png" +
        "&isCircular=true"
    );

    if (!response.ok) {
      return res.json({
        avatars: []
      });
    }

    const data = await response.json();

    const avatars = Array.isArray(data.data)
      ? data.data.map((item) => ({
          id: String(item.targetId),
          imageUrl: item.imageUrl || null
        }))
      : [];

    return res.json({
      avatars
    });

  } catch {
    return res.json({
      avatars: []
    });
  }
});


/* =========================================================
   SERVER
========================================================= */

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});