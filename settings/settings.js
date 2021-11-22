
document.addEventListener('DOMContentLoaded', read_settings);
document.getElementById("form").addEventListener('submit', save_settings);

function save_settings() {
    chrome.storage.sync.set({
        magazine: document.getElementById('magazine').value
    });
    
    alert('Listă salvată cu succes!');
    return false;
}

function read_settings() {
  chrome.storage.sync.get({
    magazine: ''
  }, function(items) {
    document.getElementById('magazine').value = items.magazine;
  });
}