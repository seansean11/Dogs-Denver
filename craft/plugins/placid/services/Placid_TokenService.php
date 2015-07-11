<?php
/**
 * Placid token class
 *
 * This class will take care of the management of access tokens that are 
 * saved from the admin area
 *
 * @author    Alec Ritson. <info@alecritson.co.uk>
 * @copyright Copyright (c) 2014, Alec Ritson.
 * @license   http://buildwithcraft.com/license Craft License Agreement
 * @link      http://itsalec.co.uk
 * @package   craft.plugins.placid.services
 * @since     0.9.5
 */
namespace Craft;

use Guzzle\Http\Client;

class Placid_TokenService extends PlacidService
{

  /**
   * The token record
   * @var
   */
  protected $tokenRecord;

  /**
   * The token
   * @var
   */
  private $token;

  public function __construct($tokenRecord = null)
  {
    $this->record = new Placid_TokenRecord;
    $this->model = new Placid_TokenModel();

    $this->tokenRecord = $tokenRecord;
    if(is_null($this->tokenRecord)) {
        $this->tokenRecord = Placid_TokenRecord::model();
    }
  }

  /**
  * Create a new model object of a token
  *                                   
  * @param array     $attributes  The attributes to save against the model 
  *
  * @return model    returns Placid_TokenModel object
  *          
  */

  public function newToken($attributes = array())
  {
    $model = new Placid_TokenModel();
    $model->setAttributes($attributes);
    return $model;
  }

  /**
  * Save a token
  *
  * @param object Placid_TokenModel object
  *
  * @return bool true or false if token has been saved
  */
  public function saveToken(Placid_TokenModel &$model)
  {
    if($id = $model->getAttribute('id'))
    {
      $record = $this->tokenRecord->findByPk($id);
    }
    else
    {
      $record = $this->tokenRecord->create();
    }
    $attributes = $model->getAttributes();
    //  Fix this, only saves as unsafe value
    $record->setAttributes($attributes, false);

    if($record->save())
    {
        $model->setAttribute('id', $record->getAttribute('id'));
        return true;
    }
    else
    {
        $model->addErrors($record->getErrors());
        return false;
    }
  }

  /**
  * Get all placid tokens
  * @deprecated Deprecated in 1.3.* Use {@link AppBehavior::getBuild() craft()->placid_token->getAll()} instead. All these sort of methods are being combined for a more streamlined, DRY API.
  * @return Placid_TokenModel object 
  */
  public function getAllTokens()
  {
    $records = $this->tokenRecord->findAll(array('order' => 't.id'));

    foreach($records as $record)
    {
        $record->setAttribute('encoded_token', craft()->security->validateData($record->getAttribute('encoded_token')));
    }
    return Placid_TokenModel::populateModels($records, 'id');
  }

  /**
  * Find token by ID
  *
  * @param string $id 
  * @deprecated Deprecated in 1.3.* Use {@link AppBehavior::getBuild() craft()->placid_token->getById()} instead. All these sort of methods are being combined for a more streamlined, DRY API.
  * @return Placid_TokenModel object
  */ 
  public function findTokenById($id)
  {
   if($record = $this->tokenRecord->findByPk($id))
   {
      return Placid_TokenModel::populateModel($record);
   }
  }

  /**
   * Delete access token from the database.
   *
   * @param  int $id
   * @return int The number of rows affected
   */
  public function deleteRecordById($id)
  {
      return $this->record->deleteByPk($id);
  }

}