var session;
var customers;
var uihelper;

$(document).ready(function() {
	var serviceURI = "http://oemobiledemo.progress.com/MobilityDemoService";
	var catalogURI = "http://oemobiledemo.progress.com/MobilityDemoService/static/mobile/MobilityDemoService.json";
	session = new progress.data.Session();
	session.login(serviceURI, "", "");
	session.addCatalog(catalogURI);

	customers = new progress.data.JSDO({ name: 'dsCustomer' });
	customers.subscribe('AfterFill', onAfterFillCustomers, this);		 

	uihelper = new progress.ui.UIHelper({ jsdo: customers });

	uihelper.eCustomer.setDetailPage({
		name: 'custdetail'
	});				

	uihelper.eCustomer.setListView({
		name:'listview', 
		format: '{CustNum}<br>{Name}',
		autoLink: true
	});

	$('#customerform').html(
		uihelper.eCustomer.getFormFields()
	);	

	customers.fill();
});

function onAfterFillCustomers(jsdo, success, request) {
	uihelper.eCustomer.clearItems();
	customers.eCustomer.foreach(function(customer) {
		var name = customer.data.Name;
		
		uihelper.eCustomer.addItem();
	});
	uihelper.eCustomer.showListView();    	
}
