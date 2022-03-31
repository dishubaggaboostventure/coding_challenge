import { Startup, StartupDTO } from "../../Types/Startup";

export default class StartupListMapper {
    public static map(startupList: StartupDTO[]): Startup[] {
        const startups: Startup[] = startupList.map((startup: StartupDTO) => {
            return {
                ...startup,
                dateCreated: new Date(startup.dateCreated),
                dateFounded: new Date(startup.dateFounded),
            };
        })
        return startups;
    }
}
