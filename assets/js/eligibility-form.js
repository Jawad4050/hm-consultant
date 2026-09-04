(function () {
	"use strict";

	// Replace with the live WhatsApp number (country code, no +, no spaces)
	var WHATSAPP_NUMBER = "923008216565";

	var form = document.querySelector(".px-elig-top");
	if (!form) return; // section not present on this page

	var state = { region: "", level: "", intake: "", name: "", city: "", phone: "" };
	var step = 1;

	var steps = document.querySelectorAll(".px-elig-step");
	var dots = [document.getElementById("elig-p1"), document.getElementById("elig-p2"), document.getElementById("elig-p3")];
	var btnNext = document.getElementById("elig-next");
	var btnBack = document.getElementById("elig-back");
	var note = document.getElementById("elig-note");

	function bindOpts(containerId, key) {
		var container = document.getElementById(containerId);
		if (!container) return;
		container.querySelectorAll(".px-elig-opt").forEach(function (opt) {
			opt.addEventListener("click", function () {
				container.querySelectorAll(".px-elig-opt").forEach(function (o) { o.classList.remove("sel"); });
				opt.classList.add("sel");
				state[key] = opt.dataset.value;
			});
		});
	}
	bindOpts("elig-region", "region");
	bindOpts("elig-level", "level");
	bindOpts("elig-intake", "intake");

	function shake(id) {
		var el = document.getElementById(id);
		if (!el) return;
		el.classList.remove("px-elig-shake");
		void el.offsetWidth; // restart animation
		el.classList.add("px-elig-shake");
	}

	function showStep(n) {
		steps.forEach(function (s) {
			s.classList.toggle("on", parseInt(s.dataset.step, 10) === n);
		});
		dots.forEach(function (d, i) {
			if (d) d.classList.toggle("on", i < n);
		});
		if (btnBack) btnBack.style.visibility = n === 1 ? "hidden" : "visible";
		if (btnNext) {
			var textSpans = btnNext.querySelectorAll("span.text-1, span.text-2");
			var label = n === 3 ? "Send on WhatsApp" : "Continue";
			textSpans.forEach(function (s) { s.textContent = label; });
		}
	}

	function buildMessage() {
		return "New eligibility check from the HM website%0A%0A" +
			"Name: " + (state.name || "-") + "%0A" +
			"City: " + (state.city || "-") + "%0A" +
			"Destination interest: " + (state.region || "-") + "%0A" +
			"Study level: " + (state.level || "-") + "%0A" +
			"Preferred intake: " + (state.intake || "-") + "%0A" +
			"Contact: " + (state.phone || "-");
	}

	function submit() {
		var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + buildMessage();
		window.open(url, "_blank");
		if (note) note.textContent = "Thanks! We've opened WhatsApp with your details, just hit send.";
	}

	if (btnNext) {
		btnNext.addEventListener("click", function () {
			if (step === 1 && !state.region) { shake("elig-region"); return; }
			if (step === 2 && (!state.level || !state.intake)) {
				shake(!state.level ? "elig-level" : "elig-intake");
				return;
			}
			if (step === 3) {
				var nameEl = document.getElementById("elig-name");
				var cityEl = document.getElementById("elig-city");
				var phoneEl = document.getElementById("elig-phone");
				state.name = nameEl ? nameEl.value.trim() : "";
				state.city = cityEl ? cityEl.value.trim() : "";
				state.phone = phoneEl ? phoneEl.value.trim() : "";
				if (!state.phone) { if (phoneEl) phoneEl.focus(); return; }
				submit();
				return;
			}
			step++;
			showStep(step);
		});
	}

	if (btnBack) {
		btnBack.addEventListener("click", function () {
			if (step > 1) { step--; showStep(step); }
		});
	}

	showStep(step);
})();
