import { of } from 'rxjs'
import covidJson from './covid.json'

const getCasesFromServer = () => covidJson

const getCasesInInternalForm = () => {
  return getCasesFromServer().map((singleCase) => ({
    id: singleCase.ROW_ID,
    detectionDate: singleCase.ACCURATE_EPISODE_DATE,
    ageGroup: singleCase.Age_Group,
    gender: singleCase.CLIENT_GENDER,
    acquisitionInfo: singleCase.CASE_ACQUISITIONINFO,
    outcome: singleCase.OUTCOME1,
    phuName: singleCase.Reporting_PHU,
    phuAddress: singleCase.Reporting_PHU_Address,
    phuCity: singleCase.Reporting_PHU_City,
    phuPostalCode: singleCase.Reporting_PHU_Postal_Code,
    phuWebsite: singleCase.Reporting_PHU_Website,
    phuLattitude: singleCase.Reporting_PHU_Latitude,
    phuLongitude: singleCase.Reporting_PHU_Longitude,
  }))
}

const fetchCases = (filter) => {
  let cases = getCasesInInternalForm()

  if (filter && filter.city) {
    cases = cases.filter(
      (singleCase) => singleCase.phuCity === filter.city
    )
  }

  return of(cases)
}

export const caseService = {
  fetchCases,
}
