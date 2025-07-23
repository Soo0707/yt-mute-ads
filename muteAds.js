var callback = () =>
{
	var b = document.getElementsByClassName("ad-showing");
	var c = document.getElementsByClassName("ad-interrupting");
	var diff = [0, 0]
  var muteButton =  document.getElementsByClassName("ytp-mute-button")[0];
	if (b.length > 0 || c.length > 0)
	{
		var adCurrent = document.getElementsByClassName("ytp-time-current")[0].textContent.split(":");
		var adEnd = document.getElementsByClassName("ytp-time-duration")[0].textContent.split(":");
		for (let i = 0; i < adCurrent.length; i++)
		{
			adCurrent[i] = parseInt(adCurrent[i]);
			adEnd[i] = parseInt(adEnd[i]);
			diff[i] = adEnd[i] - adCurrent[i];
		}

		if (!muted)
		{
			muteButton.click();
			muted = true;
		}
	}
	if (muted && diff[0] <= 0 && diff[1] <= 0)
	{
		muteButton.click();
		muted = false;
	}
}
muted = false;
setInterval(callback, 500);
