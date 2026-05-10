const MARINE_NAV_COMPASS_SVG = `
<svg id="marineNavCompassCard" xmlns="http://www.w3.org/2000/svg" viewBox="-8 -8 316 316">
  <defs>
    <linearGradient id="rimGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#465666"/>
      <stop offset="20%" stop-color="#273340"/>
      <stop offset="50%" stop-color="#334150"/>
      <stop offset="80%" stop-color="#24303b"/>
      <stop offset="100%" stop-color="#42505f"/>
    </linearGradient>

    <radialGradient id="faceGrad" cx="50%" cy="38%" r="75%">
      <stop offset="0%" stop-color="#213650"/>
      <stop offset="60%" stop-color="#13253a"/>
      <stop offset="100%" stop-color="#0b1520"/>
    </radialGradient>

    <filter id="markerShadow" x="-40%" y="-40%" width="180%" height="180%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-color="#000" flood-opacity="0.45"/>
    </filter>
  </defs>

  <g id="headingBezel" transform="rotate(0 150 150)">
    <circle cx="150" cy="150" r="145" fill="none" stroke="url(#rimGrad)" stroke-width="22"/>
    <circle cx="150" cy="150" r="156" fill="none" stroke="rgba(0,0,0,0.35)" stroke-width="1.5"/>
    <circle cx="150" cy="150" r="134" fill="none" stroke="rgba(0,0,0,0.55)" stroke-width="1.5"/>

    <polygon points="150,6 147,14 153,14"
      fill="rgba(215,236,255,0.9)"
      stroke="rgba(10,18,25,0.55)"
      stroke-width="0.8"/>

    <g font-family="Arial, sans-serif"
      font-weight="800"
      fill="rgba(215,236,255,0.88)"
      text-anchor="middle"
      dominant-baseline="middle">
      <text x="150" y="2" font-size="13">N</text>
      <text x="295" y="150" font-size="13">E</text>
      <text x="150" y="296" font-size="13">S</text>
      <text x="5" y="150" font-size="13">W</text>
      <text x="252" y="48" font-size="7">NE</text>
      <text x="252" y="252" font-size="7">SE</text>
      <text x="48" y="252" font-size="7">SW</text>
      <text x="48" y="48" font-size="7">NW</text>
    </g>

    <defs>
      <line id="tickBase" x1="150" y1="0" x2="150" y2="9"/>
    </defs>

    <g stroke="rgba(215,236,255,0.55)" stroke-width="1.2" stroke-linecap="round">
      <use href="#tickBase" transform="rotate(22.5 150 150)"/>
      <use href="#tickBase" transform="rotate(67.5 150 150)"/>
      <use href="#tickBase" transform="rotate(112.5 150 150)"/>
      <use href="#tickBase" transform="rotate(157.5 150 150)"/>
      <use href="#tickBase" transform="rotate(202.5 150 150)"/>
      <use href="#tickBase" transform="rotate(247.5 150 150)"/>
      <use href="#tickBase" transform="rotate(292.5 150 150)"/>
      <use href="#tickBase" transform="rotate(337.5 150 150)"/>
    </g>
  </g>

  <circle cx="150" cy="150" r="134" fill="url(#faceGrad)" stroke="rgba(180,195,210,0.20)" stroke-width="2"/>

  <path d="M 40.9 87 A 126 126 0 0 1 145.6 24.1"
    fill="none" stroke="#e04444" stroke-width="5" stroke-linecap="butt"/>

  <path d="M 154.4 24.1 A 126 126 0 0 1 259.1 87"
    fill="none" stroke="#31c95d" stroke-width="5" stroke-linecap="butt"/>

  <g stroke="rgba(225,234,242,0.78)" stroke-linecap="round"
    transform="translate(150,150) scale(1.08) translate(-150,-150)">
    <line x1="150" y1="270" x2="150" y2="254" stroke-width="2"/>
    <line x1="129.16" y1="268.18" x2="130.73" y2="259.31" stroke-width="1.2"/>
    <line x1="108.96" y1="262.76" x2="112.04" y2="254.31" stroke-width="1.2"/>
    <line x1="90" y1="253.92" x2="98" y2="240.07" stroke-width="2"/>
    <line x1="72.87" y1="241.93" x2="78.66" y2="235.03" stroke-width="1.2"/>
    <line x1="58.07" y1="226.60" x2="65.13" y2="221.46" stroke-width="1.2"/>
    <line x1="46.08" y1="210" x2="59.93" y2="202" stroke-width="2"/>
    <line x1="37.24" y1="191.04" x2="45.69" y2="187.96" stroke-width="1.2"/>
    <line x1="31.82" y1="170.84" x2="40.69" y2="169.27" stroke-width="1.2"/>
    <line x1="30" y1="150" x2="46" y2="150" stroke-width="2"/>
    <line x1="31.82" y1="129.16" x2="40.69" y2="130.73" stroke-width="1.2"/>
    <line x1="37.24" y1="108.96" x2="45.69" y2="112.04" stroke-width="1.2"/>
    <line x1="46.08" y1="90" x2="59.93" y2="98" stroke-width="2"/>
    <line x1="58.07" y1="73.40" x2="65.13" y2="78.54" stroke-width="1.2"/>
    <line x1="72.87" y1="58.07" x2="78.66" y2="64.97" stroke-width="1.2"/>
    <line x1="90" y1="46.08" x2="98" y2="59.93" stroke-width="2"/>
    <line x1="108.96" y1="37.24" x2="112.04" y2="45.69" stroke-width="1.2"/>
    <line x1="129.16" y1="31.82" x2="130.73" y2="40.69" stroke-width="1.2"/>
    <line x1="150" y1="30" x2="150" y2="46" stroke-width="2"/>
    <line x1="170.84" y1="31.82" x2="169.27" y2="40.69" stroke-width="1.2"/>
    <line x1="191.04" y1="37.24" x2="187.96" y2="45.69" stroke-width="1.2"/>
    <line x1="210" y1="46.08" x2="202" y2="59.93" stroke-width="2"/>
    <line x1="227.13" y1="58.07" x2="221.34" y2="64.97" stroke-width="1.2"/>
    <line x1="241.93" y1="73.40" x2="234.87" y2="78.54" stroke-width="1.2"/>
    <line x1="253.92" y1="90" x2="240.07" y2="98" stroke-width="2"/>
    <line x1="262.76" y1="108.96" x2="254.31" y2="112.04" stroke-width="1.2"/>
    <line x1="268.18" y1="129.16" x2="259.31" y2="130.73" stroke-width="1.2"/>
    <line x1="270" y1="150" x2="254" y2="150" stroke-width="2"/>
    <line x1="268.18" y1="170.84" x2="259.31" y2="169.27" stroke-width="1.2"/>
    <line x1="262.76" y1="191.04" x2="254.31" y2="187.96" stroke-width="1.2"/>
    <line x1="253.92" y1="210" x2="240.07" y2="202" stroke-width="2"/>
    <line x1="241.93" y1="226.60" x2="234.87" y2="221.46" stroke-width="1.2"/>
    <line x1="227.13" y1="241.93" x2="221.34" y2="235.03" stroke-width="1.2"/>
    <line x1="210" y1="253.92" x2="202" y2="240.07" stroke-width="2"/>
    <line x1="191.04" y1="262.76" x2="187.96" y2="254.31" stroke-width="1.2"/>
    <line x1="170.84" y1="268.18" x2="169.27" y2="259.31" stroke-width="1.2"/>
  </g>

  <g font-family="Arial, sans-serif" font-weight="500" font-size="8"
    fill="rgba(238,244,249,0.84)" text-anchor="middle" dominant-baseline="middle"
    transform="translate(150,150) scale(1.08) translate(-150,-150)">
    <text x="102" y="67">30</text>
    <text x="67" y="102">60</text>
    <text x="54" y="150">90</text>
    <text x="67" y="198">120</text>
    <text x="102" y="233">150</text>
    <text x="150" y="246">180</text>
    <text x="198" y="67">30</text>
    <text x="233" y="102">60</text>
    <text x="246" y="150">90</text>
    <text x="233" y="198">120</text>
    <text x="198" y="233">150</text>
  </g>

  <g id="boatShape">
    <line x1="150" y1="70" x2="150" y2="200"
      stroke="rgba(222,232,242,0.16)" stroke-width="1" stroke-linecap="round"/>
    <path d="M121 213 L122 143 C122 105, 140 68, 150 58 C160 68, 178 105, 178 143 L179 213"
      fill="none" stroke="rgba(222,232,242,0.32)" stroke-width="2.8"
      stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <g id="tideArrow" transform="rotate(0 150 150)" opacity="0.85">
    <path d="M150 127 C146 135, 141 142, 136 148 C140 147, 144 147, 147 148 L153 148 C156 147, 160 147, 164 148 C159 142, 154 135, 150 127 Z"
      fill="rgba(40,140,255,0.88)" stroke="rgba(180,220,255,0.35)" stroke-width="0.2"/>
    <rect x="147.5" y="148" width="5" height="21" rx="1.5" fill="rgba(40,140,255,0.55)"/>
    <circle cx="150" cy="150" r="2.2" fill="rgba(180,220,255,0.50)"/>
  </g>

  <text id="tideSpeedText"
    x="150" y="147"
    font-family="Arial, sans-serif"
    font-size="16"
    font-weight="600"
    fill="rgba(235,245,255,0.95)"
    text-anchor="middle"
    dominant-baseline="middle">0.0</text>

  <g font-family="Arial, sans-serif" text-anchor="middle">
    <text id="leftTopLabel" x="90" y="116" font-size="10" font-weight="500" fill="#d7ecff">NAME</text>
    <text id="leftTopValue" x="90" y="142" font-size="26" font-weight="600" fill="rgba(243,247,251,0.95)">0.0</text>
    <text id="leftBottomLabel" x="90" y="166" font-size="10" font-weight="500" fill="#d7ecff">NAME</text>
    <text id="leftBottomValue" x="90" y="192" font-size="26" font-weight="600" fill="rgba(243,247,251,0.95)">0.0</text>
  </g>

  <g font-family="Arial, sans-serif" text-anchor="middle">
    <text id="rightTopLabel" x="212" y="116" font-size="10" font-weight="500" fill="#d7ecff">NAME</text>
    <text id="rightTopValue" x="212" y="142" font-size="26" font-weight="600" fill="rgba(243,247,251,0.95)">0.0</text>
    <text id="rightBottomLabel" x="212" y="166" font-size="10" font-weight="500" fill="#d7ecff">NAME</text>
    <text id="rightBottomValue" x="212" y="192" font-size="26" font-weight="600" fill="rgba(243,247,251,0.95)">0.0</text>
  </g>

  <g font-family="Arial, sans-serif" text-anchor="middle">
    <text id="topLabel" x="150" y="88" font-size="10" font-weight="500" fill="#d7ecff">NAME</text>
    <text id="topValue" x="150" y="114" font-size="26" font-weight="600" fill="rgba(243,247,251,0.95)">0.0</text>
  </g>

  <g id="trueMarker" transform="rotate(0 150 150)" filter="url(#markerShadow)">
    <path d="M150 20 L163 40 L150 48 L137 40 Z"
      fill="#e3ebf2"
      stroke="rgba(10,18,25,0.55)"
      stroke-width="1.2"/>
    <text x="150" y="38"
      font-family="Arial, sans-serif"
      font-size="13"
      font-weight="800"
      fill="#13253a"
      text-anchor="middle"
      dominant-baseline="middle">T</text>
  </g>

  <g id="apparentMarker" transform="rotate(0 150 150)" filter="url(#markerShadow)">
    <path d="M150 23 L162 42 L150 51 L138 42 Z"
      fill="#f6a21a"
      stroke="rgba(10,18,25,0.55)"
      stroke-width="1.2"/>
    <text x="150" y="40"
      font-family="Arial, sans-serif"
      font-size="13"
      font-weight="800"
      fill="#13253a"
      text-anchor="middle"
      dominant-baseline="middle">A</text>
  </g>

  <g id="bottomBox" font-family="Arial, sans-serif" text-anchor="middle" opacity="0">
    <text id="bottomLabel" x="150" y="214" font-size="8" font-weight="500" fill="rgba(215,236,255,0.75)">NAME</text>
    <text id="bottomValue" x="150" y="234" font-size="18" font-weight="500" fill="rgba(243,247,251,0.82)">0.0</text>
  </g>

  <g id="waypointMarker" transform="rotate(0 150 150)" opacity="0" filter="url(#markerShadow)">
    <polygon points="150,6 157,13 150,20 143,13"
      fill="#ffd21f"
      stroke="rgba(10,18,25,0.75)"
      stroke-width="1"/>
    <circle cx="150" cy="13" r="1.6" fill="rgba(255,255,255,0.65)"/>
  </g>
</svg>
`;

class MarineNavCompassCard extends HTMLElement {
  constructor() {
    super();

    this.config = null;
    this._hass = null;

    this.trueCurrentAngle = null;
    this.apparentCurrentAngle = null;
    this.headingCurrentAngle = null;
    this.tideCurrentAngle = null;
    this.waypointCurrentAngle = null;
  }

  static getStubConfig() {
    return {
      heading_entity: "sensor.nmea_127250_heading_degrees",
      true_angle_entity: "sensor.nmea_130306_wind_angle_degrees",
      apparent_angle_entity: "sensor.apparent_wind_direction",
      current_direction_entity: "sensor.nmea_130577_set_degrees",
      current_speed_entity: "sensor.nmea_130577_drift_knots",
      waypoint_bearing_entity: "sensor.nmea_129284_bearing_position_to_destination_waypoint_degrees",

      top_label: "HDG",
      top_entity: "sensor.nmea_127250_heading_degrees",
      top_decimals: "none",

      left_top_label: "SOG",
      left_top_entity: "sensor.nmea_129026_sog_knots",
      left_top_decimals: 1,

      left_bottom_label: "TWS",
      left_bottom_entity: "sensor.nmea_130306_wind_speed_knots",
      left_bottom_decimals: 1,

      right_top_label: "AWS",
      right_top_entity: "sensor.apparent_wind_speed",
      right_top_decimals: 1,

      right_bottom_label: "STW",
      right_bottom_entity: "sensor.nmea_128259_speed_water_referenced_knots",
      right_bottom_decimals: 1,

      bottom_label: "DEPTH",
      bottom_entity: "sensor.depth_keel",
      bottom_decimals: 1,

      current_speed_decimals: 1,
      size: "100%",
    };
  }

  static getConfigElement() {
    return document.createElement("marine-nav-compass-card-editor");
  }

  setConfig(config) {
    this.config = {
      ...MarineNavCompassCard.getStubConfig(),
      ...config,
    };

    const svgWidth =
      typeof this.config.size === "number"
        ? `${this.config.size}px`
        : this.config.size || "100%";

    this.innerHTML = `
      <ha-card>
        <div id="svgContainer"></div>
      </ha-card>

      <style>
        ha-card {
          background: transparent;
          box-shadow: none;
          padding: 0;
          overflow: visible;
        }

        #svgContainer {
          line-height: 0;
          text-align: center;
          overflow: visible;
        }

        svg {
          width: ${svgWidth};
          max-width: 100%;
          height: auto;
          display: block;
          margin: 0 auto;
          overflow: visible;
        }

        #trueMarker,
        #apparentMarker,
        #headingBezel,
        #tideArrow,
        #waypointMarker {
          transform-origin: 150px 150px;
          transition: transform 0.6s ease, opacity 0.4s ease;
        }

        #tideSpeedText,
        #bottomBox {
          transition: opacity 0.4s ease;
        }
      </style>
    `;

    this.querySelector("#svgContainer").innerHTML = MARINE_NAV_COMPASS_SVG;
    this.updateGauge();
  }

  set hass(hass) {
    this._hass = hass;
    this.updateGauge();
  }

  normalise360(angle) {
    let a = angle % 360;
    if (a < 0) a += 360;
    return a;
  }

  shortestDelta(current, target) {
    return ((target - current + 540) % 360) - 180;
  }

  updateContinuousAngle(current, target) {
    if (current === null || current === undefined || isNaN(current)) {
      return target;
    }

    return current + this.shortestDelta(current, target);
  }

  getNumericState(entityId) {
    if (!entityId || !this._hass || !this._hass.states[entityId]) {
      return NaN;
    }

    const state = this._hass.states[entityId].state;

    if (
      state === "unknown" ||
      state === "unavailable" ||
      state === "" ||
      state === null ||
      state === undefined
    ) {
      return NaN;
    }

    return parseFloat(state);
  }

  hasValidState(entityId) {
    if (!entityId || !this._hass || !this._hass.states[entityId]) {
      return false;
    }

    const state = this._hass.states[entityId].state;

    return !(
      state === "unknown" ||
      state === "unavailable" ||
      state === "" ||
      state === null ||
      state === undefined
    );
  }

  formatEntityValue(entityId, decimals) {
    if (!this.hasValidState(entityId)) {
      return "-";
    }

    const state = this._hass.states[entityId].state;
    const num = parseFloat(state);

    if (isNaN(num)) {
      return state;
    }

    if (decimals === "none") {
      return Math.round(num).toString();
    }

    const places = decimals ?? this.config.decimals ?? 1;
    return num.toFixed(Number(places));
  }

  updateValue(svgId, entityId, decimals) {
    const el = this.querySelector(svgId);
    if (!el) return;

    el.textContent = this.formatEntityValue(entityId, decimals);
  }

  updateLabel(svgId, label) {
    const el = this.querySelector(svgId);
    if (!el || label === undefined || label === null) return;

    el.textContent = label;
  }

  updateGauge() {
    if (!this._hass || !this.config) return;

    const heading = this.getNumericState(this.config.heading_entity);
    const trueAngle = this.getNumericState(this.config.true_angle_entity);
    const apparentAngle = this.getNumericState(this.config.apparent_angle_entity);

    const currentDirection = this.getNumericState(this.config.current_direction_entity);
    const currentSpeed = this.getNumericState(this.config.current_speed_entity);

    const waypointBearing = this.getNumericState(this.config.waypoint_bearing_entity);

    const headingBezel = this.querySelector("#headingBezel");
    const trueMarker = this.querySelector("#trueMarker");
    const apparentMarker = this.querySelector("#apparentMarker");
    const tideArrow = this.querySelector("#tideArrow");
    const tideSpeedText = this.querySelector("#tideSpeedText");
    const waypointMarker = this.querySelector("#waypointMarker");
    const bottomBox = this.querySelector("#bottomBox");

    if (headingBezel && !isNaN(heading)) {
      const targetHeading = -this.normalise360(heading);

      this.headingCurrentAngle = this.updateContinuousAngle(
        this.headingCurrentAngle,
        targetHeading
      );

      headingBezel.style.transform = `rotate(${this.headingCurrentAngle}deg)`;
    }

    if (trueMarker) {
      if (!isNaN(trueAngle)) {
        const targetTrue = this.normalise360(trueAngle);

        this.trueCurrentAngle = this.updateContinuousAngle(
          this.trueCurrentAngle,
          targetTrue
        );

        trueMarker.style.transform = `rotate(${this.trueCurrentAngle}deg)`;
        trueMarker.style.opacity = "1";
      } else if (this.trueCurrentAngle !== null) {
        trueMarker.style.opacity = "1";
      } else {
        trueMarker.style.opacity = "0";
      }
    }

    if (apparentMarker) {
      if (!isNaN(apparentAngle)) {
        const targetApparent = this.normalise360(apparentAngle);

        this.apparentCurrentAngle = this.updateContinuousAngle(
          this.apparentCurrentAngle,
          targetApparent
        );

        apparentMarker.style.transform = `rotate(${this.apparentCurrentAngle}deg)`;
        apparentMarker.style.opacity = "1";
      } else if (this.apparentCurrentAngle !== null) {
        apparentMarker.style.opacity = "1";
      } else {
        apparentMarker.style.opacity = "0";
      }
    }

    const showTide =
      !isNaN(currentDirection) &&
      !isNaN(heading) &&
      !isNaN(currentSpeed) &&
      currentSpeed > 0.05;

    if (tideArrow) {
      if (showTide) {
        const targetTide = this.normalise360(currentDirection - heading);

        this.tideCurrentAngle = this.updateContinuousAngle(
          this.tideCurrentAngle,
          targetTide
        );

        tideArrow.style.transform = `rotate(${this.tideCurrentAngle}deg)`;
        tideArrow.style.opacity = "0.85";
      } else {
        tideArrow.style.opacity = "0";
      }
    }

    if (tideSpeedText) {
      if (showTide) {
        tideSpeedText.textContent = currentSpeed.toFixed(
          Number(this.config.current_speed_decimals ?? 1)
        );
        tideSpeedText.style.opacity = "1";
      } else {
        tideSpeedText.textContent = "";
        tideSpeedText.style.opacity = "0";
      }
    }

    if (waypointMarker) {
      if (!isNaN(waypointBearing) && !isNaN(heading)) {
        const targetWaypoint = this.normalise360(waypointBearing - heading);

        this.waypointCurrentAngle = this.updateContinuousAngle(
          this.waypointCurrentAngle,
          targetWaypoint
        );

        waypointMarker.style.transform = `rotate(${this.waypointCurrentAngle}deg)`;
        waypointMarker.style.opacity = "1";
      } else {
        waypointMarker.style.opacity = "0";
      }
    }

    this.updateValue("#topValue", this.config.top_entity, this.config.top_decimals);

    this.updateValue("#leftTopValue", this.config.left_top_entity, this.config.left_top_decimals);
    this.updateValue("#leftBottomValue", this.config.left_bottom_entity, this.config.left_bottom_decimals);
    this.updateValue("#rightTopValue", this.config.right_top_entity, this.config.right_top_decimals);
    this.updateValue("#rightBottomValue", this.config.right_bottom_entity, this.config.right_bottom_decimals);

    this.updateLabel("#topLabel", this.config.top_label);
    this.updateLabel("#leftTopLabel", this.config.left_top_label);
    this.updateLabel("#leftBottomLabel", this.config.left_bottom_label);
    this.updateLabel("#rightTopLabel", this.config.right_top_label);
    this.updateLabel("#rightBottomLabel", this.config.right_bottom_label);

    this.updateLabel("#bottomLabel", this.config.bottom_label);

    if (bottomBox) {
      if (this.hasValidState(this.config.bottom_entity)) {
        this.updateValue("#bottomValue", this.config.bottom_entity, this.config.bottom_decimals);
        bottomBox.style.opacity = "1";
      } else {
        bottomBox.style.opacity = "0";
      }
    }
  }

  getCardSize() {
    return 3;
  }
}

class MarineNavCompassCardEditor extends HTMLElement {
  constructor() {
    super();
    this._config = {};
    this._hass = null;
  }

  setConfig(config) {
    this._config = {
      ...MarineNavCompassCard.getStubConfig(),
      ...config,
    };
    this.render();
  }

  set hass(hass) {
    this._hass = hass;
    this.render();
  }

  configChanged(newConfig) {
    this._config = {
      ...this._config,
      ...newConfig,
    };

    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this._config },
        bubbles: true,
        composed: true,
      })
    );
  }

  makeTextInput(key, label) {
    const value = this._config[key] ?? "";
    return `
      <ha-textfield
        label="${label}"
        .value="${value}"
        data-key="${key}"
      ></ha-textfield>
    `;
  }

  makeNumberInput(key, label) {
    const value = this._config[key] ?? "";
    return `
      <ha-textfield
        label="${label}"
        type="number"
        .value="${value}"
        data-key="${key}"
      ></ha-textfield>
    `;
  }

  makeEntityPicker(key, label) {
    const value = this._config[key] ?? "";
    return `
      <ha-entity-picker
        label="${label}"
        .hass="this._hass"
        .value="${value}"
        data-key="${key}"
        allow-custom-entity
      ></ha-entity-picker>
    `;
  }

  render() {
    if (!this._hass) return;

    this.innerHTML = `
      <style>
        .editor {
          display: grid;
          gap: 14px;
        }

        .section {
          display: grid;
          gap: 10px;
          padding: 12px;
          border: 1px solid var(--divider-color);
          border-radius: 12px;
        }

        .section-title {
          font-weight: 700;
          color: var(--primary-text-color);
        }

        ha-textfield,
        ha-entity-picker {
          width: 100%;
        }
      </style>

      <div class="editor">
        <div class="section">
          <div class="section-title">Main navigation sensors</div>
          ${this.makeEntityPicker("heading_entity", "Heading entity")}
          ${this.makeEntityPicker("true_angle_entity", "True wind angle entity")}
          ${this.makeEntityPicker("apparent_angle_entity", "Apparent wind angle entity")}
          ${this.makeEntityPicker("current_direction_entity", "Current direction entity")}
          ${this.makeEntityPicker("current_speed_entity", "Current speed entity")}
          ${this.makeEntityPicker("waypoint_bearing_entity", "Waypoint bearing entity")}
        </div>

        <div class="section">
          <div class="section-title">Top box</div>
          ${this.makeTextInput("top_label", "Top label")}
          ${this.makeEntityPicker("top_entity", "Top entity")}
          ${this.makeTextInput("top_decimals", "Top decimals, or none")}
        </div>

        <div class="section">
          <div class="section-title">Left boxes</div>
          ${this.makeTextInput("left_top_label", "Left top label")}
          ${this.makeEntityPicker("left_top_entity", "Left top entity")}
          ${this.makeNumberInput("left_top_decimals", "Left top decimals")}
          ${this.makeTextInput("left_bottom_label", "Left bottom label")}
          ${this.makeEntityPicker("left_bottom_entity", "Left bottom entity")}
          ${this.makeNumberInput("left_bottom_decimals", "Left bottom decimals")}
        </div>

        <div class="section">
          <div class="section-title">Right boxes</div>
          ${this.makeTextInput("right_top_label", "Right top label")}
          ${this.makeEntityPicker("right_top_entity", "Right top entity")}
          ${this.makeNumberInput("right_top_decimals", "Right top decimals")}
          ${this.makeTextInput("right_bottom_label", "Right bottom label")}
          ${this.makeEntityPicker("right_bottom_entity", "Right bottom entity")}
          ${this.makeNumberInput("right_bottom_decimals", "Right bottom decimals")}
        </div>

        <div class="section">
          <div class="section-title">Bottom box and size</div>
          ${this.makeTextInput("bottom_label", "Bottom label")}
          ${this.makeEntityPicker("bottom_entity", "Bottom entity")}
          ${this.makeNumberInput("bottom_decimals", "Bottom decimals")}
          ${this.makeNumberInput("current_speed_decimals", "Current speed decimals")}
          ${this.makeTextInput("size", "Card size, e.g. 100% or 300")}
        </div>
      </div>
    `;

    this.querySelectorAll("ha-textfield, ha-entity-picker").forEach((el) => {
      el.addEventListener("value-changed", (ev) => {
        const key = el.dataset.key;
        const value = ev.detail.value;
        this.configChanged({ [key]: value });
      });

      el.addEventListener("input", (ev) => {
        const key = el.dataset.key;
        const value = ev.target.value;
        this.configChanged({ [key]: value });
      });
    });
  }
}

if (!customElements.get("marine-nav-compass-card")) {
  customElements.define("marine-nav-compass-card", MarineNavCompassCard);
}

if (!customElements.get("marine-nav-compass-card-editor")) {
  customElements.define("marine-nav-compass-card-editor", MarineNavCompassCardEditor);
}

console.info(
  "%cMARINE-NAV-COMPASS-CARD% v0.9.1-beta",
  "color: #1e90ff; font-weight: bold;"
);
