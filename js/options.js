function save_options() {
  var use_default_provider = document.getElementById("use_default_provider").checked;
  localStorage["use_default_provider"] = use_default_provider;

  var providerList = document.getElementById("provider");
  var provider = providerList.value;
  localStorage["provider"] = provider;
  console.log(localStorage);

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function () {
    status.innerHTML = "";
  }, 750);

  browser.runtime.sendMessage({
    options: localStorage
  }, function (response) {
    console.log(response);
  });
}

// Restores select box state to saved value from localStorage.
function restore_options() {

  var use_default_provider = localStorage["use_default_provider"];
  if (use_default_provider === 'true') {
    document.getElementById("use_default_provider").checked = true;
  } else {
    document.getElementById("use_default_provider").checked = false;
  }

  var provider = localStorage["provider"];
  if (provider)
    document.getElementById("provider").value = provider;

}

document.addEventListener('DOMContentLoaded', function () {
  restore_options();
  refreshProviderStatus($('#use_default_provider'));

  $('#use_default_provider').click(function () {
    refreshProviderStatus(this);
  });

})

document.getElementById("save").addEventListener('click', function () {
  save_options();
})


refreshProviderStatus = function (checkbox) {
    if ($(checkbox).is(":checked")) {
      $('#provider').removeAttr('disabled');

    } else {
      $('#provider').attr("disabled", "disabled");

    }
  }



