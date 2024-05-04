const categories = { Partial_matches: [{ url: `/posts/pattern-matching/`, date: `03 May 2024`, title: `Pattern Matching`},],Matching_tuples: [{ url: `/posts/pattern-matching/`, date: `03 May 2024`, title: `Pattern Matching`},],Loops: [{ url: `/posts/pattern-matching/`, date: `03 May 2024`, title: `Pattern Matching`},],.none: [{ url: `/posts/pattern-matching/`, date: `03 May 2024`, title: `Pattern Matching`},],.some: [{ url: `/posts/pattern-matching/`, date: `03 May 2024`, title: `Pattern Matching`},],Matching_ranges: [{ url: `/posts/pattern-matching/`, date: `03 May 2024`, title: `Pattern Matching`},],Matching_enums_and_associated_values: [{ url: `/posts/pattern-matching/`, date: `03 May 2024`, title: `Pattern Matching`},], }

console.log(categories)

window.onload = function () {
  document.querySelectorAll(".category").forEach((category) => {
    category.addEventListener("click", function (e) {
      const posts = categories[e.target.innerText.replace(" ","_")];
      let html = ``
      posts.forEach(post=>{
        html += `
        <a class="modal-article" href="${post.url}">
          <h4>${post.title}</h4>
          <small class="modal-article-date">${post.date}</small>
        </a>
        `
      })
      document.querySelector("#category-modal-title").innerText = e.target.innerText;
      document.querySelector("#category-modal-content").innerHTML = html;
      document.querySelector("#category-modal-bg").classList.toggle("open");
      document.querySelector("#category-modal").classList.toggle("open");
    });
  });

  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.toggle("open");
    document.querySelector("#category-modal").classList.toggle("open");
  })
};