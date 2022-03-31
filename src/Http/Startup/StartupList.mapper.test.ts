import { describe, expect } from "@jest/globals";
import { Startup } from "../../Types/Startup";
import { startupDTO, startupDTOList } from "./Startup.test-data";
import StartupListMapper from "./StartupList.mapper";

describe("Startup Mapper", () => {
    it("should create Date objects from date strings", () => {
        const mappedStartupList = StartupListMapper.map(startupDTOList);
        mappedStartupList.forEach((mappedStartup: Startup) => {
            expect(mappedStartup.dateCreated).toEqual(new Date(startupDTO.dateCreated));
            expect(mappedStartup.dateFounded).toEqual(new Date(startupDTO.dateFounded));
        })
    });
});
