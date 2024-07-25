import type { ISetSettingsView } from '@/types/Navbar'
import ResourceLinks from './ResourceLinks'
import SettingsMainOptions from './SettingsMainOptions'
import Socials from './Socials'

export default function DefaultSettingsView({ setSettingsView }: { setSettingsView: ISetSettingsView }) {
    return (
        <>
            <h2 className="font-medium">Settings</h2>
            <SettingsMainOptions setSettingsView={setSettingsView} />
            <ResourceLinks />
            <Socials />

        </>
    )
}

