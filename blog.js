
document.getElementById("commentForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent normal form submit

    let name = document.getElementById("name").value.trim();
    let comment = document.getElementById("comment").value.trim();
    let errorMsg = document.getElementById("errorMsg");
    let commentList = document.getElementById("commentList");

    // Validation
    if (name === "" || comment === "") {
        errorMsg.style.display = "block";
        return;
    } else {
        errorMsg.style.display = "none";
    }

    // Create comment item
    let commentItem = document.createElement("div");
    commentItem.classList.add("comment-item");

    commentItem.innerHTML = `
        <strong>${name}</strong>
        <p>${comment}</p>
    `;

    // Append comment
    commentList.appendChild(commentItem);

    // Clear fields
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
});

