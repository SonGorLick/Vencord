/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { app } from "electron";
import { existsSync } from "fs";
import { join } from "path";

export const APPDATA_FOLDER_VENCORD = process.env.VENCORD_USER_DATA_DIR ?? (
    process.env.DISCORD_USER_DATA_DIR
        ? join(process.env.DISCORD_USER_DATA_DIR, "..", "VencordData")
        : join(app.getPath("userData"), "..", "Vencord")
);
export const SETTINGS_IN_APPDATA = existsSync(join(APPDATA_FOLDER_VENCORD, ".use"));
export const DATA_DIR = SETTINGS_IN_APPDATA ? APPDATA_FOLDER_VENCORD : join(__dirname, "..");
export const SETTINGS_DIR = join(DATA_DIR, "settings");
export const QUICKCSS_PATH = join(SETTINGS_DIR, "quickCss.css");
export const SETTINGS_FILE = join(SETTINGS_DIR, "settings.json");
export const ALLOWED_PROTOCOLS = [
    "https:",
    "http:",
    "steam:",
    "spotify:"
];
