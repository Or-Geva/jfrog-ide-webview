import css from './Dependency.module.css'
import Summary from '../../UI/Summary/Summary'
import Edited from '../../UI/Edited/Edited'
import Header from '../../UI/Header/Header'
import Navigator from './Navigator/Navigator'
import { IDependencyPage } from '../../../model/dependencyPage'
import CveVulnerability from '../../UI/Summary/CveVulnerability'

export interface Props {
  data: IDependencyPage
}

function Dependency(props: Props): JSX.Element {
	return (
		<div className={css.Container}>
			<Header
				Severity={props.data.severity}
				text={props.data.cve?.id ? props.data.cve.id : props.data.id}
				isResearch={props.data.extendedInformation !== undefined}/>
			{props.data.extendedInformation && <Edited date={props.data.edited}/>}
			<Summary expandButton>
				<CveVulnerability data={props.data}/>
			</Summary>
			<Navigator data={props.data}/>
		</div>
	)
}

export default Dependency