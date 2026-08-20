document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     FRIENDS
  ========================================================= */

  const myFriends = [
    {
      id: "10511948215",
      username: "YAMsab123",
      displayName: "YAMsab123"
    },
    {
      id: "5515654486",
      username: "AGAN_MIRZALI13",
      displayName: "AGAN_MIRZALI13"
    },
    {
      id: "5296927626",
      username: "free_danger1232",
      displayName: "MURAD_SEFERLI0"
    },
    {
      id: "5069967579",
      username: "123ManSuperman",
      displayName: "Happy_Ramadan"
    },
    {
      id: "8202950596",
      username: "BRO_PRO123",
      displayName: "BRO_PRO"
    },
    {
      id: "9686696956",
      username: "Fanatik_Ars",
      displayName: "JusTxDie"
    },
    {
      id: "5344828409",
      username: "Buggat120",
      displayName: "00Yahya"
    },
    {
      id: "5673860649",
      username: "aayyeell_01",
      displayName: "cocacola"
    }
  ];


  /* =========================================================
     SAFE FALLBACK IMAGE
  ========================================================= */

  const FALLBACK_AVATAR =
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg"
           width="150"
           height="150"
           viewBox="0 0 150 150">
        <rect width="150" height="150"
              rx="75"
              fill="#303138"/>
        <circle cx="75" cy="60" r="25"
                fill="#aeb0b8"/>
        <rect x="35" y="90"
              width="80"
              height="45"
              rx="22"
              fill="#aeb0b8"/>
      </svg>
    `);


  /* =========================================================
     ELEMENTS
  ========================================================= */

  const openSendBtn =
    document.getElementById("openSendBtn");

  const sendOverlay =
    document.getElementById("rbxSendOverlay");

  const sendClose =
    document.getElementById("rbxSendClose");

  const searchScreen =
    document.getElementById("rbxSearchScreen");

  const amountScreen =
    document.getElementById("rbxAmountScreen");

  const successScreen =
    document.getElementById("rbxSuccessScreen");

  const searchInput =
    document.getElementById("rbxSearchInput");

  const searchResults =
    document.getElementById("rbxSearchResults");

  const selectedAvatar =
    document.getElementById("rbxSelectedAvatar");

  const selectedName =
    document.getElementById("rbxSelectedName");

  const selectedUsername =
    document.getElementById("rbxSelectedUsername");

  const amountInput =
    document.getElementById("rbxAmountInput");

  const nextButton =
    document.getElementById("rbxNextButton");

  const pageBalance =
    document.getElementById("pageRobuxBalance");

  const modalBalance =
    document.getElementById("rbxSendBalance");

  const successAmount =
    document.getElementById("rbxSuccessAmount");

  const successUsername =
    document.getElementById("rbxSuccessUsername");

  const doneButton =
    document.getElementById("rbxDoneButton");


  /* =========================================================
     FRIENDS AREA
  ========================================================= */

  let friendsSection =
    document.getElementById(
      "rbxFriendsSection"
    );

  let friendsList =
    document.getElementById(
      "rbxFriendsList"
    );

  if (
    searchScreen &&
    !friendsSection
  ) {

    friendsSection =
      document.createElement("div");

    friendsSection.id =
      "rbxFriendsSection";

    friendsSection.className =
      "rbx-friends-section";

    friendsSection.innerHTML = `
      <div class="rbx-friends-title">
        My Friends <span>(91)</span>
      </div>

      <div
        class="rbx-friends-list"
        id="rbxFriendsList"
      ></div>
    `;

    if (searchResults) {
      searchScreen.insertBefore(
        friendsSection,
        searchResults
      );
    } else {
      searchScreen.appendChild(
        friendsSection
      );
    }

    friendsList =
      document.getElementById(
        "rbxFriendsList"
      );
  }


  /* =========================================================
     FRIENDS CSS
  ========================================================= */

  if (
    !document.getElementById(
      "friendStyles"
    )
  ) {

    const style =
      document.createElement("style");

    style.id =
      "friendStyles";

    style.textContent = `
      .rbx-friends-section {
        width: 100%;
        margin-top: 18px;
      }

      .rbx-friends-title {
        margin: 0 0 10px;
        padding: 0 3px;
        color: #f5f5f7;
        font-size: 16px;
        line-height: 22px;
        font-weight: 700;
      }

      .rbx-friends-title span {
        color: #999aa3;
        font-weight: 600;
      }

      .rbx-friends-list {
        width: 100%;
        max-height: 330px;
        overflow-y: auto;
        overflow-x: hidden;
        padding-right: 3px;
      }

      .rbx-friend-item {
        width: 100%;
        min-height: 64px;
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 0;
        padding: 8px 10px;
        border: 0;
        border-bottom: 1px solid #292a30;
        background: transparent;
        color: #fff;
        text-align: left;
        cursor: pointer;
      }

      .rbx-friend-item:last-child {
        border-bottom: 0;
      }

      .rbx-friend-item:hover {
        background: #23242a;
      }

      .rbx-friend-avatar {
        width: 42px;
        height: 42px;
        min-width: 42px;
        flex: 0 0 42px;
        display: block;
        border-radius: 50%;
        object-fit: cover;
        background: #303138;
      }

      .rbx-friend-info {
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .rbx-friend-name {
        color: #f2f2f4;
        font-size: 14px;
        line-height: 1;
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .rbx-friend-username {
        color: #a9aab2;
        font-size: 13px;
        line-height: 1;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .rbx-friends-list::-webkit-scrollbar {
        width: 5px;
      }

      .rbx-friends-list::-webkit-scrollbar-track {
        background: transparent;
      }

      .rbx-friends-list::-webkit-scrollbar-thumb {
        background: #3a3b42;
        border-radius: 10px;
      }
    `;

    document.head.appendChild(style);
  }


  /* =========================================================
     REDEEM
  ========================================================= */

  const redeemOpener =
    document.getElementById("howToRedeem");

  const redeemOverlay =
    document.getElementById("redeemOverlay");

  const redeemClose =
    document.getElementById("redeemClose");

  const redeemAmount =
    document.getElementById("redeemAmount");

  const redeemConfirm =
    document.getElementById("redeemConfirm");

  const redeemRefreshButtons =
    document.querySelectorAll(
      "#redeemRefresh"
    );


  /* =========================================================
     BALANCE
  ========================================================= */

  let balance = Number(
    localStorage.getItem(
      "demoRobuxBalance"
    )
  );

  if (
    !Number.isFinite(balance) ||
    balance < 0
  ) {
    balance = 0;
  }


  /* =========================================================
     STATE
  ========================================================= */

  let selectedUser = null;
  let searchTimer = null;
  let sending = false;
  let loadingOverlay = null;


  /* =========================================================
     FORMAT
  ========================================================= */

  function cleanNumber(value) {
    return Number(
      Number(value).toFixed(2)
    ).toString();
  }


  function formatRobux(value) {

    value = Number(value);

    if (
      !Number.isFinite(value) ||
      value < 0
    ) {
      return "0";
    }

    if (
      value >=
      1_000_000_000_000
    ) {
      return (
        cleanNumber(
          value /
          1_000_000_000_000
        ) + "T"
      );
    }

    if (
      value >=
      1_000_000_000
    ) {
      return (
        cleanNumber(
          value /
          1_000_000_000
        ) + "B"
      );
    }

    if (
      value >=
      1_000_000
    ) {
      return (
        cleanNumber(
          value /
          1_000_000
        ) + "M"
      );
    }

    if (
      value >=
      1_000
    ) {
      return (
        cleanNumber(
          value /
          1_000
        ) + "K"
      );
    }

    return Math.floor(value)
      .toLocaleString("en-US");
  }


  function parseRobux(value) {

    if (!value) {
      return 0;
    }

    let text =
      String(value)
        .toUpperCase()
        .trim()
        .replace(/,/g, "")
        .replace(/\s/g, "");

    let multiplier = 1;

    if (text.endsWith("T")) {

      multiplier =
        1_000_000_000_000;

      text =
        text.slice(0, -1);

    } else if (text.endsWith("B")) {

      multiplier =
        1_000_000_000;

      text =
        text.slice(0, -1);

    } else if (text.endsWith("M")) {

      multiplier =
        1_000_000;

      text =
        text.slice(0, -1);

    } else if (text.endsWith("K")) {

      multiplier =
        1_000;

      text =
        text.slice(0, -1);
    }

    text =
      text.replace(
        /[^0-9.]/g,
        ""
      );

    const number =
      Number(text);

    if (
      !Number.isFinite(number) ||
      number <= 0
    ) {
      return 0;
    }

    return number * multiplier;
  }


  /* =========================================================
     BALANCE
  ========================================================= */

  function updateBalance() {

    const text =
      formatRobux(balance);

    if (pageBalance) {
      pageBalance.textContent =
        text;
    }

    if (modalBalance) {
      modalBalance.textContent =
        text;
    }

    localStorage.setItem(
      "demoRobuxBalance",
      String(balance)
    );
  }

  updateBalance();


  /* =========================================================
     LOAD FRIEND AVATARS
     DIRECT ROBLOX API
     NO RENDER
  ========================================================= */

  async function loadFriendAvatars() {

    if (!friendsList) {
      return {};
    }

    try {

      const ids =
        myFriends
          .map(friend =>
            String(friend.id)
          )
          .join(",");

      const url =
        "https://thumbnails.roblox.com/v1/users/avatar-headshot" +
        "?userIds=" +
        encodeURIComponent(ids) +
        "&size=150x150" +
        "&format=Png" +
        "&isCircular=true";

      const response =
        await fetch(
          url,
          {
            method: "GET",
            cache: "no-store"
          }
        );

      if (!response.ok) {
        return {};
      }

      const data =
        await response.json();

      const map = {};

      if (
        Array.isArray(
          data?.data
        )
      ) {

        data.data.forEach(
          (item) => {

            if (
              item &&
              item.targetId &&
              item.imageUrl
            ) {

              map[
                String(item.targetId)
              ] =
                item.imageUrl;
            }
          }
        );
      }

      return map;

    } catch (error) {

      console.error(
        "Friend avatar error:",
        error
      );

      return {};
    }
  }


  /* =========================================================
     RENDER FRIENDS
  ========================================================= */

  async function renderFriends() {

    if (!friendsList) {
      return;
    }

    friendsList.innerHTML =
      "";

    const elements =
      new Map();

    myFriends.forEach(
      (friend) => {

        const button =
          document.createElement(
            "button"
          );

        button.type =
          "button";

        button.className =
          "rbx-friend-item";


        const avatar =
          document.createElement(
            "img"
          );

        avatar.className =
          "rbx-friend-avatar";

        avatar.src =
          FALLBACK_AVATAR;

        avatar.alt =
          "";


        const info =
          document.createElement(
            "div"
          );

        info.className =
          "rbx-friend-info";


        const name =
          document.createElement(
            "div"
          );

        name.className =
          "rbx-friend-name";

        name.textContent =
          friend.displayName;


        const username =
          document.createElement(
            "div"
          );

        username.className =
          "rbx-friend-username";

        username.textContent =
          "@" +
          friend.username;


        info.appendChild(name);
        info.appendChild(username);

        button.appendChild(avatar);
        button.appendChild(info);

        friendsList.appendChild(
          button
        );


        elements.set(
          friend.id,
          {
            button,
            avatar
          }
        );


        button.addEventListener(
          "click",
          () => {

            selectUser({

              id:
                friend.id,

              username:
                friend.username,

              displayName:
                friend.displayName,

              avatar:
                avatar.src
            });

          }
        );
      }
    );


    const avatarMap =
      await loadFriendAvatars();


    myFriends.forEach(
      (friend) => {

        const element =
          elements.get(
            friend.id
          );

        if (!element) {
          return;
        }

        const imageUrl =
          avatarMap[
            String(friend.id)
          ];

        if (
          imageUrl &&
          typeof imageUrl ===
            "string"
        ) {

          element.avatar.src =
            imageUrl;
        }
      }
    );
  }


  renderFriends();


  /* =========================================================
     SELECT USER
  ========================================================= */

  function selectUser(user) {

    selectedUser =
      user;


    if (selectedAvatar) {

      selectedAvatar.src =
        user.avatar ||
        FALLBACK_AVATAR;

      selectedAvatar.alt =
        "";
    }


    if (selectedName) {

      selectedName.textContent =
        user.displayName ||
        user.username;
    }


    if (selectedUsername) {

      selectedUsername.textContent =
        "@" +
        user.username;
    }


    if (searchScreen) {

      searchScreen.style.display =
        "none";
    }


    if (amountScreen) {

      amountScreen.style.display =
        "block";
    }


    if (successScreen) {

      successScreen.style.display =
        "none";
    }


    if (amountInput) {

      amountInput.value =
        "";

      setTimeout(
        () => {
          amountInput.focus();
        },
        50
      );
    }
  }


  /* =========================================================
     RESET
  ========================================================= */

  function resetSend() {

    if (loadingOverlay) {

      loadingOverlay.remove();

      loadingOverlay =
        null;
    }

    sending = false;


    if (nextButton) {

      nextButton.disabled =
        false;

      nextButton.textContent =
        "Send Robux";
    }


    if (searchScreen) {

      searchScreen.style.display =
        "block";
    }


    if (amountScreen) {

      amountScreen.style.display =
        "none";
    }


    if (successScreen) {

      successScreen.style.display =
        "none";
    }


    if (searchInput) {

      searchInput.value =
        "";
    }


    if (searchResults) {

      searchResults.innerHTML =
        "";
    }


    if (amountInput) {

      amountInput.value =
        "";
    }


    selectedUser =
      null;


    if (friendsSection) {

      friendsSection.style.display =
        "block";
    }
  }


  /* =========================================================
     OPEN
  ========================================================= */

  function openSend() {

    if (!sendOverlay) {
      return;
    }

    updateBalance();

    resetSend();

    sendOverlay.classList.add(
      "rbx-open"
    );

    setTimeout(
      () => {
        searchInput?.focus();
      },
      50
    );
  }


  /* =========================================================
     CLOSE
  ========================================================= */

  function closeSend() {

    if (!sendOverlay) {
      return;
    }

    sendOverlay.classList.remove(
      "rbx-open"
    );

    resetSend();
  }


  openSendBtn?.addEventListener(
    "click",
    openSend
  );


  sendClose?.addEventListener(
    "click",
    closeSend
  );


  doneButton?.addEventListener(
    "click",
    closeSend
  );


  sendOverlay?.addEventListener(
    "click",
    (event) => {

      if (
        event.target ===
        sendOverlay
      ) {

        closeSend();
      }
    }
  );


  /* =========================================================
     ESC
  ========================================================= */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key !==
        "Escape"
      ) {
        return;
      }


      if (
        sendOverlay?.classList.contains(
          "rbx-open"
        )
      ) {

        closeSend();
      }


      if (
        redeemOverlay?.classList.contains(
          "rbx-open"
        )
      ) {

        redeemOverlay.classList.remove(
          "rbx-open"
        );
      }
    }
  );


  /* =========================================================
     SEARCH INPUT
  ========================================================= */

  searchInput?.addEventListener(
    "input",
    () => {

      const username =
        searchInput.value.trim();


      clearTimeout(
        searchTimer
      );


      if (!username) {

        searchResults.innerHTML =
          "";

        if (friendsSection) {

          friendsSection.style.display =
            "block";
        }

        return;
      }


      if (friendsSection) {

        friendsSection.style.display =
          "none";
      }


      if (
        username.length < 2
      ) {

        searchResults.innerHTML = `
          <div class="rbx-search-status">
            Type at least 2 characters
          </div>
        `;

        return;
      }


      searchResults.innerHTML = `
        <div class="rbx-search-status">
          Searching...
        </div>
      `;


      searchTimer =
        setTimeout(
          () => {

            searchUser(
              username
            );

          },
          300
        );
    }
  );


  /* =========================================================
     SEARCH USER
     DIRECT ROBLOX API
     NO RENDER
  ========================================================= */

  async function searchUser(username) {

    try {

      /*
        STEP 1:
        Username -> Roblox User ID
      */

      const response =
        await fetch(
          "https://users.roblox.com/v1/usernames/users",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json"
            },

            body:
              JSON.stringify({
                usernames: [username],
                excludeBannedUsers: false
              })
          }
        );


      if (!response.ok) {
        throw new Error(
          "Roblox users API error"
        );
      }


      const data =
        await response.json();


      if (
        !data.data ||
        !Array.isArray(data.data) ||
        data.data.length === 0
      ) {

        searchResults.innerHTML = `
          <div class="rbx-search-status">
            User not found
          </div>
        `;

        return;
      }


      const robloxUser =
        data.data[0];


      /*
        STEP 2:
        User ID -> Avatar
      */

      let avatar =
        FALLBACK_AVATAR;


      try {

        const avatarResponse =
          await fetch(
            "https://thumbnails.roblox.com/v1/users/avatar-headshot" +
            "?userIds=" +
            encodeURIComponent(
              String(
                robloxUser.id
              )
            ) +
            "&size=150x150" +
            "&format=Png" +
            "&isCircular=true",
            {
              method: "GET",
              cache: "no-store"
            }
          );


        if (
          avatarResponse.ok
        ) {

          const avatarData =
            await avatarResponse.json();


          if (
            Array.isArray(
              avatarData?.data
            ) &&
            avatarData.data[0] &&
            avatarData.data[0].imageUrl
          ) {

            avatar =
              avatarData.data[0].imageUrl;
          }
        }

      } catch (avatarError) {

        console.warn(
          "Avatar could not be loaded:",
          avatarError
        );
      }


      /*
        STEP 3:
        Create our user object
      */

      const user = {

        id:
          String(
            robloxUser.id
          ),

        username:
          robloxUser.name,

        displayName:
          robloxUser.displayName ||
          robloxUser.name,

        avatar:
          avatar
      };


      renderSearchUser(
        user
      );


    } catch (error) {

      console.error(
        "Roblox search error:",
        error
      );


      searchResults.innerHTML = `
        <div class="rbx-search-status">
          Couldn't load Roblox user.
        </div>
      `;
    }
  }


  /* =========================================================
     SEARCH RESULT
  ========================================================= */

  function renderSearchUser(user) {

    searchResults.innerHTML =
      "";


    const button =
      document.createElement(
        "button"
      );

    button.type =
      "button";

    button.className =
      "rbx-search-result";


    const avatar =
      document.createElement(
        "div"
      );

    avatar.className =
      "rbx-result-avatar";


    const img =
      document.createElement(
        "img"
      );

    img.src =
      user.avatar ||
      FALLBACK_AVATAR;

    img.alt =
      "";


    const info =
      document.createElement(
        "div"
      );

    info.className =
      "rbx-result-info";


    const name =
      document.createElement(
        "div"
      );

    name.className =
      "rbx-result-name";

    name.textContent =
      user.displayName ||
      user.username;


    const username =
      document.createElement(
        "div"
      );

    username.className =
      "rbx-result-username";

    username.textContent =
      "@" +
      user.username;


    info.appendChild(name);
    info.appendChild(username);

    avatar.appendChild(img);

    button.appendChild(avatar);
    button.appendChild(info);

    searchResults.appendChild(
      button
    );


    button.addEventListener(
      "click",
      () => {

        selectUser(
          user
        );
      }
    );
  }


  /* =========================================================
     QUICK AMOUNTS
  ========================================================= */

  document
    .querySelectorAll(
      ".rbx-quick-buttons button"
    )
    .forEach(
      (button) => {

        button.addEventListener(
          "click",
          () => {

            const value =
              button.dataset.amount;

            if (!value) {
              return;
            }

            amountInput.value =
              formatRobux(
                Number(value)
              );

            amountInput.focus();
          }
        );
      }
    );


  /* =========================================================
     AMOUNT INPUT
  ========================================================= */

  amountInput?.addEventListener(
    "input",
    () => {

      let value =
        amountInput.value
          .toUpperCase();

      value =
        value.replace(
          /[^0-9KMBT.,]/g,
          ""
        );

      const suffix =
        value.match(
          /[KMBT]/g
        );


      if (
        suffix &&
        suffix.length > 1
      ) {

        const first =
          suffix[0];

        const index =
          value.indexOf(
            first
          );

        value =
          value.substring(
            0,
            index + 1
          );
      }


      amountInput.value =
        value;
    }
  );


  /* =========================================================
     ENTER FORMAT
  ========================================================= */

  amountInput?.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key !==
        "Enter"
      ) {
        return;
      }

      event.preventDefault();


      const value =
        amountInput.value.trim();


      if (!value) {
        return;
      }


      const amount =
        parseRobux(value);


      if (
        !Number.isFinite(amount) ||
        amount <= 0
      ) {
        return;
      }


      amountInput.value =
        formatRobux(amount);
    }
  );


  /* =========================================================
     LOADING
  ========================================================= */

  function createLoading() {

    if (
      loadingOverlay ||
      !sendOverlay
    ) {
      return;
    }


    const modal =
      sendOverlay.querySelector(
        ".rbx-send-modal"
      );


    if (!modal) {
      return;
    }


    loadingOverlay =
      document.createElement(
        "div"
      );


    loadingOverlay.className =
      "rbx-loading-overlay";


    loadingOverlay.innerHTML = `
      <div class="rbx-loading-spinner">
        <i class="fa-solid fa-spinner"></i>
      </div>

      <div class="rbx-loading-title">
        Sending Robux...
      </div>

      <div class="rbx-loading-text">
        Please wait while we process your request.
      </div>
    `;


    modal.appendChild(
      loadingOverlay
    );
  }


  /* =========================================================
     LOADING CSS
  ========================================================= */

  if (
    !document.getElementById(
      "sendLoadingCSS"
    )
  ) {

    const style =
      document.createElement("style");

    style.id =
      "sendLoadingCSS";

    style.textContent = `
      .rbx-send-modal {
        position: relative !important;
      }

      .rbx-loading-overlay {
        position: absolute !important;
        inset: 0 !important;
        z-index: 999999 !important;

        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;

        background: #1b1c21 !important;
        border-radius: inherit !important;
      }

      .rbx-loading-spinner {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
      }

      .rbx-loading-spinner i {
        font-size: 40px;
        animation: rbxSpin .8s linear infinite;
      }

      @keyframes rbxSpin {

        from {
          transform: rotate(0deg);
        }

        to {
          transform: rotate(360deg);
        }
      }

      .rbx-loading-title {
        color: #f7f7f8;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 8px;
      }

      .rbx-loading-text {
        color: #999aa1;
        font-size: 13px;
      }
    `;

    document.head.appendChild(
      style
    );
  }


  /* =========================================================
     SEND ROBUX
  ========================================================= */

  nextButton?.addEventListener(
    "click",
    () => {

      if (sending) {
        return;
      }


      if (!selectedUser) {
        return;
      }


      const amount =
        parseRobux(
          amountInput.value
        );


      if (
        !Number.isFinite(amount) ||
        amount <= 0
      ) {

        amountInput.focus();

        return;
      }


      if (
        amount > balance
      ) {

        alert(
          "You don't have enough Robux."
        );

        amountInput.focus();

        return;
      }


      sending =
        true;


      nextButton.disabled =
        true;

      nextButton.textContent =
        "Sending...";


      createLoading();


      setTimeout(
        () => {

          balance -=
            amount;

          updateBalance();


          const userKey =
            selectedUser.id
              ? "id:" +
                selectedUser.id
              : "username:" +
                String(
                  selectedUser.username
                ).toLowerCase();


          let userBalances =
            {};


          try {

            userBalances =
              JSON.parse(
                localStorage.getItem(
                  "demoRobloxUserBalances"
                )
              ) || {};

          } catch {

            userBalances =
              {};
          }


          userBalances[userKey] =
            Number(
              userBalances[
                userKey
              ] || 0
            ) + amount;


          localStorage.setItem(
            "demoRobloxUserBalances",
            JSON.stringify(
              userBalances
            )
          );


          if (successAmount) {

            successAmount.textContent =
              formatRobux(
                amount
              );
          }


          if (successUsername) {

            successUsername.textContent =
              "@" +
              selectedUser.username;
          }


          if (loadingOverlay) {

            loadingOverlay.remove();

            loadingOverlay =
              null;
          }


          amountScreen.style.display =
            "none";

          successScreen.style.display =
            "block";


          sending =
            false;


          nextButton.disabled =
            false;


          nextButton.textContent =
            "Send Robux";


          amountInput.value =
            "";

        },
        1500
      );
    }
  );


  /* =========================================================
     REDEEM
  ========================================================= */

  redeemOpener?.addEventListener(
    "click",
    (event) => {

      event.preventDefault();

      updateBalance();

      redeemOverlay?.classList.add(
        "rbx-open"
      );


      if (redeemAmount) {
        redeemAmount.value =
          "";
      }


      setTimeout(
        () => {
          redeemAmount?.focus();
        },
        50
      );
    }
  );


  redeemClose?.addEventListener(
    "click",
    () => {

      redeemOverlay?.classList.remove(
        "rbx-open"
      );
    }
  );


  redeemOverlay?.addEventListener(
    "click",
    (event) => {

      if (
        event.target ===
        redeemOverlay
      ) {

        redeemOverlay.classList.remove(
          "rbx-open"
        );
      }
    }
  );


  redeemAmount?.addEventListener(
    "input",
    () => {

      let value =
        redeemAmount.value
          .toUpperCase();


      value =
        value.replace(
          /[^0-9KMBT.,]/g,
          ""
        );


      const suffix =
        value.match(
          /[KMBT]/g
        );


      if (
        suffix &&
        suffix.length > 1
      ) {

        const first =
          suffix[0];

        const index =
          value.indexOf(
            first
          );

        value =
          value.substring(
            0,
            index + 1
          );
      }


      redeemAmount.value =
        value;
    }
  );


  redeemAmount?.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key !==
        "Enter"
      ) {
        return;
      }


      event.preventDefault();


      const value =
        redeemAmount.value.trim();


      if (!value) {
        return;
      }


      const amount =
        parseRobux(value);


      if (
        !Number.isFinite(amount) ||
        amount <= 0
      ) {
        return;
      }


      redeemAmount.value =
        formatRobux(amount);
    }
  );


  redeemConfirm?.addEventListener(
    "click",
    () => {

      const amount =
        parseRobux(
          redeemAmount.value
        );


      if (
        !Number.isFinite(amount) ||
        amount <= 0
      ) {

        redeemAmount?.focus();

        return;
      }


      balance +=
        amount;


      updateBalance();


      if (redeemAmount) {

        redeemAmount.value =
          "";
      }


      redeemOverlay?.classList.remove(
        "rbx-open"
      );
    }
  );


  /* =========================================================
     REDEEM RESET
  ========================================================= */

  redeemRefreshButtons.forEach(
    (button) => {

      button.addEventListener(
        "click",
        (event) => {

          event.preventDefault();
          event.stopPropagation();


          balance = 0;


          localStorage.setItem(
            "demoRobuxBalance",
            "0"
          );


          updateBalance();


          if (redeemAmount) {

            redeemAmount.value =
              "";
          }
        }
      );
    }
  );


  /* =========================================================
     DEBUG
  ========================================================= */

  window.getDemoRobuxBalance =
    () => balance;


  window.resetDemoRobuxBalance =
    () => {

      balance = 0;

      updateBalance();
    };

});